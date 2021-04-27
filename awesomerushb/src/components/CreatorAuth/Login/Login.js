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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import routes from '../../../router/router';


const jwtUrl = "http://54.234.217.249:80/api/login";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            open:false
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
        const user = {
            username : this.state.username,
            password : this.state.password
        }
        this.userPostFetch(user)
        // this.getProfileFetch() 

    }

    userPostFetch = (user) => {
        return fetch(jwtUrl, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((resp) => {
                if(!resp.status.toString().startsWith("2")){
                    this.setState({open: true})
                    console.log(this.state.open)
                    return Promise.reject();
                }     
               return resp.json()
            }).then((data) => {
                this.setState({open: false})
                console.log("data", data)
                // store the token into localStorage
                localStorage.setItem("token", data.resultData.token);
                // To check if the token was saved successfully
                console.log(localStorage.token);

      
            })
    }

    
    handleClose = () => {
        this.setState({open: false});
      };
    


    render() { 

        return(
            <div>
                {/* <Header sections={routes}/> */}
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


                        <Dialog
                            open={this.state.open}
                            // TransitionComponent={Transition}
                            keepMounted
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">{"Please provide valid username/password"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Your username / password is not valid, please check carefully!
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Agree
                            </Button>
                            </DialogActions>
                        </Dialog>


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

