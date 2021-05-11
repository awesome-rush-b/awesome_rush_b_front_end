import Loadable from "react-loadable";

const Loading = () => null;

const MainPage = Loadable({
  loader: () => import("./MainPage/MainPage"),
  loading: Loading,
});

const ArticleList = Loadable({
  loader: () => import("./ArticleList/ArticleList"),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import("./CreatorAuth/Login/Login"),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import("./CreatorAuth/Register/Register"),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import("./Dashboard/Dashboard"),
  loading: Loading,
});

const SearchPage = Loadable({
  loader: () => import("./SearchPage/SearchPage"),
  loading: Loading,
});

const ArticleDetail = Loadable({
  loader: () => import("./ArticleDetail/ArticleDetail"),
  loading: Loading,
});

const Page404 = Loadable({
  loader: () => import("./ErrorPages/Page404"),
  loading: Loading,
});

export {
  MainPage,
  ArticleList,
  Login,
  Register,
  Dashboard,
  SearchPage,
  ArticleDetail,
  Page404
};
