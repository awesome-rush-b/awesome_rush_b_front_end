import React, { Component } from 'react';
import { Header } from '../../components/'
import SelfIntroduction from './StaticSelfIntroduction/selfIntroduction'
import ArticleCard from '../ArticleList/ArticleCard/ArticleCard'
import routes from '../../router/router';
import { Container } from '@material-ui/core';
import Footer from '../Footer/Footer';
import FirstEntryAnimation from '../FirstEntryAnimation/FirstEntryAnimation';


const getAllBlogsUrl = "http://dev.awesomerushb.com/api/blogs";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // open:false,
            allBlogs: []
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
                this.setState({ allBlogs: data.resultData }, () => {
                    console.log(this.state.allBlogs)
                })
            })
    }
    componentDidMount() {
        this.getAllBlogs(getAllBlogsUrl);
    }

    render() {
        return (
            <React.Fragment>
                <FirstEntryAnimation />
                <Container maxWidth='lg'>
                    <div>
                        <Header />
                        <SelfIntroduction />
                        <div>
                            {
                                this.state.allBlogs.map((blog) => (
                                    <ArticleCard
                                        key={blog.blogId}
                                        title={blog.title}
                                        content={blog.content}
                                        createDate={blog.createDate}
                                        modifyDate={blog.modifyDate}
                                        hashTag={blog.hashTag}
                                    />
                                ))
                            }
                        </div>
                        <Footer />
                    </div>
                </Container>

            </React.Fragment>

        );
    }
}

export default MainPage;

