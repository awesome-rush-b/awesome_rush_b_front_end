import React, {Component} from 'react';
import { Header } from '../../../components' ;
import Logo from '../../Logo/Logo';
import $ from 'jquery';
import './Login.css';
import {
    Button,
    TextField,
    Input,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { ThemeProvider } from '@material-ui/styles';



class Login extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleClick = () => {
        let loginInfo = {
            username : this.state.username,
            password : this.state.password,
        };
    }
    

    render() { 
        return(
            <div>
                <Header />
                <form>
                <TextField 
                    label="Account" 
                    variant="outlined" 
                    name = 'account'
                    value = {this.state.username}
                    onChange = {this.handleChange}
                    
                />
                <br/>
                <TextField 
                    label="Password" 
                    variant="outlined" 
                    name = 'password'
                    value = {this.state.password}
                    onChange = {this.handleChange}
                />
                <Button 
                    variant="outlined"
                    onClick = {this.handleClick}
                >
                    Default
                </Button>
                </form>
            </div>
        );
    }
}

export default Login;

