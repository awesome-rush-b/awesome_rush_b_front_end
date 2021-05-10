import 'braft-editor/dist/index.css'
import React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './Dashboard.css'
import { Dropdown, Input, Button } from 'semantic-ui-react'

const getAllTagsUrl = 'http://dev.awesomerushb.com/api/tags';
const jwtToken = localStorage.token;




export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // editorState: BraftEditor.createEditorState(),
            context: '',
            dropdownOptions: [],
            currentValues: [],
            title: null
        };
    }


    async componentDidMount() {
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
                    this.preTagOption(data.resultData);
                })
        }
    }

    preTagOption = (tags) => {

        const tagOptions = tags.map((tag) => ({
            key: tag.name,
            text: tag.name,
            value: tag.name
        }))
        console.log(tagOptions);

        this.setState({ dropdownOptions: tagOptions })
    }

    handleAddition = (e, { value }) => {
        this.setState((prevState) => ({
            dropdownOptions: [{ text: value, value }, ...prevState.dropdownOptions],
        }))
    }
    handleTitleChange = (e, { value }) => {
        this.setState({ title: value })
    }

    handleHashTagChange = (e, { value }) => this.setState({ currentValues: value })


    handleEditorChange = ({ text }) => {
        this.setState({ context: text })
    }
    handleBlogSubmit = () => {

    }


    render() {
        const mdParser = new MarkdownIt();
        const { editorState, context, currentValues, title } = this.state
        const excludeControls = ['media', 'fullscreen']

        return (
            <div style={{ width: "100%" }}>
                <div className='title'>
                    <Input transparent fluid size='huge' placeholder='Text your title' onChange={this.handleTitleChange} />
                    <br />
                    <Dropdown
                        options={this.state.dropdownOptions}
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
                <br />
                <div className='editor'>
                    <div className="editor-wrapper">
                        <MdEditor
                            style={{ height: "600px" }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={this.handleEditorChange}

                        />
                    </div>
                </div>

                <h5>Test Output</h5>
                <div className="output-content">{title}</div>
                <div className="output-content">{currentValues}</div>
                <div className="output-content">{context}</div>
                <div className='blogSumbit'>
                    <Button secondary onClick={this.handleBlogSubmit}>Submit</Button>
                </div>
            </div>

        )

    }

}