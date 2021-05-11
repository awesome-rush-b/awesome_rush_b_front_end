import React from 'react';
import Logo from '../../Logo/Logo';
import './Login.css';
import {
    Button,
    TextField,
    CssBaseline,
    Typography,
    Container,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const jwtUrl = "http://54.234.217.249:80/api/login";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            open: false,
            loginSuccLoader: false
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
            username: this.state.username,
            password: this.state.password
        }
        this.userPostFetch(user)

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
                if (!resp.status.toString().startsWith("2")) {
                    this.setState({ open: true })
                    console.log(this.state.open)
                    return Promise.reject();
                }
                return resp.json()
            }).then((data) => {
                this.setState({ open: false })
                console.log("data", data)
                console.log(user.username)
                // store the token into localStorage
                localStorage.setItem("token", data.resultData.token);
                localStorage.setItem("username", user.username);
                // To check if the token was saved successfully
                console.log(localStorage.token);
                this.setState({ loginSuccLoader: true })
                this.timer = setTimeout(() => {
                    this.setState({ loginSuccLoader: false }, () => {
                        this.props.history.push('/mainPage')
                    });

                }, 800);



            })
    }


    handleClose = () => {
        this.setState({ open: false });
    };



    render() {

        return (
            <div>
                <Logo />
                <Container component="main" maxWidth="xs">
                    {
                        this.state.loginSuccLoader ? (
                            <div style={{ textAlign: "center", margin: '400px auto' }}>
                                <Icon.Group size='huge' >
                                    <Icon loading size='big' name='circle notch' />
                                    <Icon name='user' />
                                </Icon.Group>
                            </div>

                        ) : (
                            <div>
                                <CssBaseline />

                                <div style={{
                                    marginTop: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    <form noValidate style={{
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
                                            value={this.state.username}
                                            onChange={this.handleChange}
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
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            style={{
                                                margin: (3, 0, 2),
                                                background: "black",
                                                color: "white"
                                            }}
                                            onClick={this.handleSubmit}
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
                                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                                <Icon.Group size='huge'>
                                                    <Icon size='big' color='red' name='dont' />
                                                    <Icon color='black' name='hand paper' />
                                                </Icon.Group>
                                            </div>

                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description">
                                                    Invalid username / password
                                            </DialogContentText>
                                            </DialogContent>
                                        </Dialog>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </Container>

            </div>
        );
    }
}

export default Login;

