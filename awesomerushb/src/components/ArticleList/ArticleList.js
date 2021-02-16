import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import { Header } from '../../components/'
import ArticleCard from './ArticleCard/ArticleCard' 
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
// const isValidUrl = 'http://54.234.217.249:80/api/isValid'
const getAllBlogsUrl = "http://54.234.217.249:80/api/blogs";

class ArticleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // open:false,
            allBlogs:[]
        };
    }


    getAllBlogs = (token, getAllBlogsUrl) => {
        if (token) {
            return fetch(getAllBlogsUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({allBlogs:data.resultData}, () => {
                    console.log(this.state.allBlogs)
                })
            })
        }
    }


    handleClose = () => {
        this.setState({open: false});
    }

    handleSkipToLogin = () => {
        this.props.history.push('/login')
    }

    componentDidMount () {
        this.getAllBlogs(jwtToken, getAllBlogsUrl);
    }


    render() {
        return(
            <div>
                <Header />
                <h1>This is ArticleList</h1>
                {/* {
                    this.state.allBlogs.map((blog)=> (
                        <ArticleCard
                            key = {blog.blogId}
                            title = {blog.title}
                            content = {blog.content}
                            createDate = {blog.createDate}
                            modifyDate = {blog.modifyDate}
                            hashTag = {blog.hashTag}
                        />
                    ))
                } */}
                <ArticleCard
                    ArticleData = {this.state.allBlogs}
                />

            </div>
        );
    }
}
export default ArticleList;