import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import Markdown from 'braft-extensions/dist/markdown'
import 'braft-extensions/dist/code-highlighter.css'
import 'prismjs/components/prism-java'
import './Dashboard.css'


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

const optionsMarkdown = {
    includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(CodeHighlighter(optionsCodeHighlighter), Markdown(optionsMarkdown))


export default class Editor extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(),
        outputHTML: '<p></p>'
    }

    componentDidMount() {
        this.isLivinig = true
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
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

        const { editorState, outputHTML } = this.state
        const excludeControls = ['media', 'fullscreen']

        return (
            <div className='editor'>
                <div className="editor-wrapper">
                    <BraftEditor
                        id="editor-with-code-highlighter"
                        value={editorState}
                        onChange={this.handleChange}
                        language='en'
                        excludeControls={excludeControls}
                        placeholder='please text here'

                    />
                </div>
                {/* <h5>Test Output</h5>
                <div className="output-content">{outputHTML}</div> */}
            </div>
        )

    }

}