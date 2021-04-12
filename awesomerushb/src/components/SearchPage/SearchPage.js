import React, {Component} from 'react';
import { Header } from '../../components'
import SearchBox from './SearchBox/SearchBox' 
import SearchResShowCase from './SearchResShowCase/SearchResShowCase'
import {
    Button,
    TextField,
    Avatar,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    Container,
    makeStyles
} from '@material-ui/core';

const jwtToken = localStorage.token;
const getBlogByTitleF= "http://54.234.217.249:80/api/blog/title/";

class SearchPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchContent:'',
            blogSearchResult:[]

        };
    }

    SearchBlogByTitle = (token, SearchBlogsUrl) => {
        if (token) {
            return fetch(SearchBlogsUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({blogSearchResult:data.resultData}, () => {
                    console.log("blog search res:", this.state.blogSearchResult)
                })
            })
        }
    }

    handleSearchContent = (searchContent) => {
        this.setState({searchContent: searchContent}, ()=>{
            console.log(" state search content", this.state.searchContent) 
        })
    }

    onClickSearch = () => {
        console.log(jwtToken);
        let SearchBlogsUrl = getBlogByTitleF + this.state.searchContent
        console.log('test', SearchBlogsUrl);
        this.SearchBlogByTitle(jwtToken, SearchBlogsUrl)

    }
    
    render() {
        return(
            <div>
                <Header />
                <SearchBox
                    handleSearchContent = {this.handleSearchContent}
                    onClickSearch = {this.onClickSearch}
                />
                <div style={{margin:"80px 500px"}}>
                    {
                        this.state.blogSearchResult.length !== 0 ? 
                        this.state.blogSearchResult.map((blog)=> (
                            <SearchResShowCase
                                key = {blog.blogId}
                                title = {blog.title}
                                content = {blog.content}
                                createDate = {blog.createDate}
                                modifyDate = {blog.modifyDate}
                                hashTag = {blog.hashTag}
                            />
                        )) : 
                        <div style = {{textAlign:"center"}}>
                            <span style={{fontSize:"20px", fontFamily:"fantasy"}}>Awesome Blogs start here!</span>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default SearchPage;