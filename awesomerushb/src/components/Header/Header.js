import React, {Component} from 'react';
// NavLinK作为跳转路由标签,如常用的侧边栏跳转高亮效果就可以使用这个标签
import { NavLink } from 'react-router-dom';

// 声明跳转路由时,当前跳转对象的背景色及颜色,以作高亮区分
const selectedStyle = {
    backgroundColor: 'grey',
    color: 'white'
}


class Header extends React.Component {
    
    render() {
        return(
            <nav>
                <NavLink to = '/mainPage' activeStyle = { selectedStyle }> Main page </NavLink>
                <NavLink to = '/articleList' activeStyle = { selectedStyle }> Article List </NavLink>
                <NavLink to = '/login' activeStyle = { selectedStyle }> Login Page </NavLink>
                <NavLink to = '/register' activeStyle = { selectedStyle }> Register Page </NavLink>
                <NavLink to = '/dashboard' activeStyle = { selectedStyle }> Dash board </NavLink>
                <NavLink to = '/searchPage' activeStyle = { selectedStyle }> Search Page </NavLink>
            </nav>
        );
    }
}

export default Header;