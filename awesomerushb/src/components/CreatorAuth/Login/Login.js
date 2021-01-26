import React, {Component} from 'react';
import { Header } from '../../../components' ;
import Logo from '../../Logo/Logo';
import './Login.css';
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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

 



class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState, () => {
            console.log(this.state)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.userPostFetch(this.state)
    }

    userPostFetch = (user) => {
        const jwtUrl = "http://54.234.217.249:80/testApi/login";
        return fetch(jwtUrl, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            },
            // body: JSON.stringify({user})
            body: JSON.stringify({username:"awesome", b:"test"})
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // store the token into localStorage
                // localStorage.setItem("token", data.token);
            })
    }



    render() { 
        return(
            <div>
                <Header />
                <Logo />

                <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <div style ={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                    }}>
                        <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                        <form noValidate style = {{
                            width: '100%', // Fix IE 11 issue.
                            marginTop: 1,
                        }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            name="username"
                            autoFocus
                            value = {this.state.username}
                            onChange = {this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style = {{
                                margin: (3,0,2),
                                background: "white",
                                color:"black"
                            }}
                            onClick = {this.handleSubmit}
                        >
                            Sign In
                        </Button> 
                        <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Login;

