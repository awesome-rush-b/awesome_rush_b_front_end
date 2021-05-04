import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Header } from '../../components/'
import ArticleCard from './ArticleCard/ArticleCard'
import ArticleDetail from './AtricleDetail/ArticleDetail'
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
import Footer from '../Footer/Footer'


const getAllBlogsUrl = "http://dev.awesomerushb.com/api/blogs";

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // open:false,
            allBlogs: [],
            isDetailed: false,
            curBlogId: null
        };
    }


    getAllBlogs = (getAllBlogsUrl) => {

        return fetch(getAllBlogsUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',

            }
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({ allBlogs: data.resultData })
            })
    }


    handleClose = () => {
        this.setState({ open: false });
    }

    handleSkipToLogin = () => {
        this.props.history.push('/login')
    }


    handleArticleDetailShow = (blogId) => {
        this.setState({ isDetailed: true, curBlogId: blogId }, () => {
            console.log("blogId", this.state.curBlogId);
        });
    }

    componentDidMount() {
        this.getAllBlogs(getAllBlogsUrl);
    }



    render() {
        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    <div>
                        <Header />
                        <h1>This is ArticleList</h1>

                        {
                            this.state.isDetailed ? (
                                <ArticleDetail
                                    curBlogId={this.state.curBlogId}
                                />
                            ) : (
                                this.state.allBlogs.map((blog) => (
                                    <ArticleCard
                                        blogId={blog.blogId}
                                        title={blog.title}
                                        content={blog.content}
                                        createDate={blog.createDate}
                                        modifyDate={blog.modifyDate}
                                        hashTag={blog.hashTag}
                                        handleArticleDetailShow={this.handleArticleDetailShow}
                                    />
                                ))
                            )

                        }
                        <Footer />
                    </div>

                </Container>
            </React.Fragment>

        );
    }
}
export default ArticleList;