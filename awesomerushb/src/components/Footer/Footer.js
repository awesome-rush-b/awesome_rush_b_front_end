import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';



/**
 *
 * @description 返回 Copyright 的 Typography 文字铸排
 * @return {*} 
 */
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">

            {'Feel free to visit '}
            <Link color="inherit" href="https://github.com/awesome-rush-b">
                <GitHubIcon />
                our Github
                </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


/** @description material-ui 的样式表单，通过 hook 的方式定义组件 classname */
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));


/**
 *
 * @description Footer 组件
 * @export
 * @param 此组件无需参数输入
 * @return {*} 
 */
export default function Footer(props) {
    const classes = useStyles();


    const description = 'Code by Brickea, Mark, Jonah'
    const title = 'Awesome Rush B'


    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}


Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};