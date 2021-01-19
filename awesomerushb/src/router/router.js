// import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


// import ArticleList from '../components/ArticleList/ArticleList';
// import Login from '../components/CreatorAuth/Login/Login';
// import Register from '../components/CreatorAuth/Register/Register';
// import Dashboard from '../components/Dashboard/Dashboard';
// import MainPage from '../components/MainPage/MainPage';
// import SearchPage from '../components/SearchPage/SearchPage';

import { MainPage, ArticleList, Login, Register, Dashboard, SearchPage } from '../components/loadComponent';

const routes = [{
    path: '/mainPage',
    component: MainPage
},{
    path: '/articleList',
    component: ArticleList
},{
    path: '/login',
    component: Login
},{
    path: '/register',
    component: Register
},{
    path: '/dashboard',
    component: Dashboard
},{
    path: '/searchPage',
    component: SearchPage
}];

export default routes

