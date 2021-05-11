// import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

// import ArticleList from '../components/ArticleList/ArticleList';
// import Login from '../components/CreatorAuth/Login/Login';
// import Register from '../components/CreatorAuth/Register/Register';
// import Dashboard from '../components/Dashboard/Dashboard';
// import MainPage from '../components/MainPage/MainPage';
// import SearchPage from '../components/SearchPage/SearchPage';

import {
  MainPage,
  ArticleList,
  Login,
  Register,
  Dashboard,
  SearchPage,
  ArticleDetail,
  Page404
} from "../components/loadComponent";

const routes = [
  {
    title: "Main Page",
    path: "/mainPage",
    component: MainPage,
  },
  {
    title: "Article List",
    path: "/articleList",
    component: ArticleList,
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
  {
    title: "Register",
    path: "/register",
    component: Register,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    title: "Search Page",
    path: "/searchPage",
    component: SearchPage,
  },
  {
    title: "Article Detail",
    path: "/articleDetail/:id",
    component: ArticleDetail,
  },
  {
    title: "404 Page",
    path: "/404Page/:message",
    component: Page404,
  },
];

export default routes;
