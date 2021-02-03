import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import { Header } from '../../components/'
import ImgMediaCard from './ArticleCard/ArticleCard' 
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const jwtToken = localStorage.token;

class ArticleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open:false,
            allBlogs:{}
        };
    }

    checkIsLogin = (jwtToken) =>{
        console.log(jwtToken)
        if(jwtToken==""||jwtToken==null||jwtToken==undefined){
            this.setState({open: true})
        }  
    }

    getAllBlogs = (token) => {
        const getAllBlogsUrl = "http://54.234.217.249:80/api/blogs";
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
                this.setState({allBlogs:data}, ()=>{
                    console.log("all Blogs:", this.state.allBlogs)
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
        this.checkIsLogin(jwtToken);
        this.getAllBlogs(jwtToken);
    }

    render() {
        return(
            <div>
                <Header />
                <h1>This is ArticleList</h1>\
                <ImgMediaCard/>
                <Dialog
                    open={this.state.open}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Login Reminder"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Your login has expired, please login again!
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleSkipToLogin} color="primary">
                        Login
                    </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}
export default ArticleList;