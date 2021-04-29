import { Box, Button, IconButton, makeStyles, Toolbar, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

import React, { Component } from 'react';
import FirstEntryAnimation from '../FirstEntryAnimation/FirstEntryAnimation';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    btnSigninSignup: {
        padding: theme.spacing(1),
        marginLeft: 'dense'
    }
}));


export default function Header(props) {
    const classes = useStyles();
    // const { sections } = props;
    const title = props.title ? props.title : "Awesome Blog"

    const headerSignupHref = '/register'
    const headerSigninHref = '/login'
    const headerSearchHref = '/searchPage'
    const headerNavSections = [
        {
            title: 'Main Page',
            path: '/mainPage',
        },
        {
            title: 'Article List',
            path: '/articleList',
        },
        // {
        //     title: 'Login',
        //     path: '/login',
        // },
        // {
        //     title: 'Register',
        //     path: '/register',
        // },
        {
            title: 'Dashboard',
            path: '/dashboard',
        },
        // {
        //     title: 'Search Page',
        //     path: '/searchPage',
        // }
    ]

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="justify"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton href={headerSearchHref}>
                    <SearchIcon />
                </IconButton>
                <Button variant='text' size="small">Subscribe</Button>
                <Button variant="text" size="small" className={classes.btnSigninSignup} href={headerSigninHref}>
                    Sign in
                </Button>
                <Button variant="text" size="small" color='secondary' className={classes.btnSigninSignup} href={headerSignupHref}>
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {headerNavSections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.path}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};


// NavLinK作为跳转路由标签,如常用的侧边栏跳转高亮效果就可以使用这个标签
// import { Link, NavLink } from 'react-router-dom';

// 声明跳转路由时,当前跳转对象的背景色及颜色,以作高亮区分
// const selectedStyle = {
//     backgroundColor: 'grey',
//     color: 'white'
// }


// // class Header extends React.Component {

// //     render() {
// //         return (
// //             <nav>
// //                 <NavLink to='/mainPage' activeStyle={selectedStyle}> Main page </NavLink>
// //                 <NavLink to='/articleList' activeStyle={selectedStyle}> Article List </NavLink>
// //                 <NavLink to='/login' activeStyle={selectedStyle}> Login Page </NavLink>
// //                 <NavLink to='/register' activeStyle={selectedStyle}> Register Page </NavLink>
// //                 <NavLink to='/dashboard' activeStyle={selectedStyle}> Dash board </NavLink>
// //                 <NavLink to='/searchPage' activeStyle={selectedStyle}> Search Page </NavLink>
// //             </nav>
// //         );
// //     }
// // }

// // export default Header;

// class Header extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: props.title ? props.title : 'Awesome Blog',  // Title of the header

//             // css style classes
//             classes: makeStyles((theme) => ({
//                 toolbar: {
//                     borderBottom: `1000px solid ${theme.palette.divider}`,
//                 },
//                 toolbarTitle: {
//                     flex: 1,
//                 },
//                 toolbarSecondary: {
//                     justifyContent: 'space-between',
//                     overflowX: 'auto',
//                 },
//                 toolbarLink: {
//                     padding: theme.spacing(1),
//                     flexShrink: 0,
//                 },
//             })),

//             sections: [
//                 {
//                     title: 'Main Page',
//                     url: 'www.google.com'
//                 },
//                 {
//                     title: 'Article List',
//                     url: '/articleList'
//                 },
//                 {
//                     title: 'Login',
//                     url: '/login'
//                 },
//                 {
//                     title: 'Register',
//                     url: '/register'
//                 },
//                 {
//                     title: 'Dashboard',
//                     url: '/dashboard'
//                 },
//                 {
//                     title: 'Search Page',
//                     url: '/searchPage'
//                 }
//             ]
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Toolbar className={this.state.classes.toolbar}>
//                     <Button size="small">Subscribe</Button>

//                     <Typography
//                         component="h2"
//                         variant="h5"
//                         color="inherit"
//                         align="center"
//                         noWrap
//                         className={this.state.classes.toolbarTitle}
//                     >
//                         {this.state.title}
//                         {this.state.classes.toolbarTitle}
//                     </Typography>
//                     <IconButton>
//                         <SearchIcon />
//                     </IconButton>
//                     <Button
//                         variant="outlined"
//                         size="small">
//                         Sign up
//                 </Button>
//                 </Toolbar>
//                 <Toolbar component="nav" variant="dense" className={this.state.classes.toolbarSecondary}>
//                     {this.state.sections.map((section) => (
//                         <Link
//                             color="inherit"
//                             noWrap
//                             key={section.title}
//                             variant="body2"
//                             href={section.url}
//                             className={this.state.classes.toolbarLink}
//                         >
//                             {section.title}
//                         </Link>
//                     ))}
//                 </Toolbar>
//             </React.Fragment>

//         )
//     }

// }

// export default Header;

