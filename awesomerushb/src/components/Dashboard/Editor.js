import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import Markdown from 'braft-extensions/dist/markdown'
import 'braft-extensions/dist/code-highlighter.css'
import 'prismjs/components/prism-java'
import './Dashboard.css'
import { Button, jssPreset } from '@material-ui/core'
import { Dropdown, Input } from 'semantic-ui-react'

const getAllTagsUrl = 'http://dev.awesomerushb.com/api/tags';
const jwtToken = localStorage.token;

const optionsCodeHighlighter = {
    syntaxs: [
        {
            name: 'JavaScript',
            syntax: 'javascript'
        }, {
            name: 'HTML',
            syntax: 'html'
        }, {
            name: 'CSS',
            syntax: 'css'
        }, {
            name: 'Java',
            syntax: 'java',
        }
    ]
}

// const options = [
//     { key: 'English', text: 'English', value: 'English' },
//     { key: 'French', text: 'French', value: 'French' },
//     { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
//     { key: 'German', text: 'German', value: 'German' },
//     { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
// ]

const optionsMarkdown = {
    includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(CodeHighlighter(optionsCodeHighlighter), Markdown(optionsMarkdown))


export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(),
            context: '<p></p>',
            currentValues: [],
            title: null
        };
    }


    async componentDidMount() {
        // let tags = await this.props.getAllTags(jwtToken, getAllTagsUrl);
        // this.preTagOption(tags)
        this.getAllTags(jwtToken, getAllTagsUrl);
        this.isLivinig = true
        setTimeout(this.setEditorContentAsync, 3000)

    }

    componentWillUnmount() {
        this.isLivinig = false
    }
    getAllTags = (token, getAllTagsUrl) => {
        if (token) {
            return fetch(getAllTagsUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    // this.setState({ allTags: data.resultData })
                    // return data.resultData;
                    this.preTagOption(data.resultData);
                })
        }
    }
    preTagOption = (tags) => {
        const tagOptions = tags.map((tag) => ({
            'key': tag.name,
            'text': tag.name,
            'value': tag.tagId
        }))
        console.log(tagOptions);

        this.setState({ currentValues: tagOptions }, () => {
            console.log(this.state.currentValues)
        })
    }

    handleAddition = (e, { value }) => {
        this.setState((prevState) => ({
            options: [{ text: value, value }, ...prevState.options],
        }))
    }
    handleTitleChange = (e, { value }) => {
        this.setState({ title: value })
    }

    handleHashTagChange = (e, { value }) => this.setState({ currentValues: value })

    handleEidtorChange = (editorState) => {
        this.setState({
            editorState: editorState,
            context: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: null
        })
    }

    preview = () => {

        if (window.previewWindow) {
            window.previewWindow.close()
        }

        window.previewWindow = window.open()
        window.previewWindow.document.write(this.buildPreviewHtml())
        window.previewWindow.document.close()

    }

    buildPreviewHtml() {

        return `
          <!Doctype html>
          <html>
            <head>
              <title>Preview Content</title>
              <style>
                html,body{
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  overflow: auto;
                  background-color: #f1f2f3;
                }
                .container{
                  box-sizing: border-box;
                  width: 1000px;
                  max-width: 100%;
                  min-height: 100%;
                  margin: 0 auto;
                  padding: 30px 20px;
                  overflow: hidden;
                  background-color: #fff;
                  border-right: solid 1px #eee;
                  border-left: solid 1px #eee;
                }
                .container img,
                .container audio,
                .container video{
                  max-width: 100%;
                  height: auto;
                }
                .container p{
                  white-space: pre-wrap;
                  min-height: 1em;
                }
                .container pre{
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-radius: 5px;
                }
                .container blockquote{
                  margin: 0;
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-left: 3px solid #d1d1d1;
                }
              </style>
            </head>
            <body>
              <div class="container">${this.state.editorState.toHTML()}</div>
            </body>
          </html>
        `

    }

    render() {

        const { editorState, context, currentValues, title } = this.state
        const excludeControls = ['media', 'fullscreen']

        return (
            <div>
                <div className='title'>
                    <Input transparent fluid size='huge' placeholder='Text your title' onChange={this.handleTitleChange} />
                    <br />
                    <Dropdown
                        options={this.state.options}
                        placeholder='Choose HashTage'
                        search
                        selection
                        fluid
                        multiple
                        allowAdditions
                        value={currentValues}
                        onAddItem={this.handleAddition}
                        onChange={this.handleHashTagChange}
                    />
                </div>
                <div className='editor'>
                    <div className="editor-wrapper">
                        <BraftEditor
                            id="editor-with-code-highlighter"
                            value={editorState}
                            onChange={this.handleEidtorChange}
                            language='en'
                            excludeControls={excludeControls}
                            placeholder='please text here'

                        />
                    </div>
                </div>
                <h5>Test Output</h5>
                <div className="output-content">{title}</div>
                <div className="output-content">{currentValues}</div>
                <div className="output-content">{context}</div>

            </div>

        )

    }

}