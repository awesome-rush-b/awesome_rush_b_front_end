import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Link,
  Hidden,
} from "@material-ui/core";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/core/Menu";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  btnSigninSignup: {
    padding: theme.spacing(1),
    marginLeft: "dense",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  // const { sections } = props;
  const title = props.title ? props.title : "Awesome Blog";

  const headerSignupHref = "/register";
  const headerSigninHref = "/login";
  const headerSearchHref = "/searchPage";
  const headerNavSections = [
    {
      title: "Main Page",
      path: "/mainPage",
    },
    {
      title: "Article List",
      path: "/articleList",
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
      title: "Dashboard",
      path: "/dashboard",
    },
    // {
    //     title: 'Search Page',
    //     path: '/searchPage',
    // }
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
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
        <Hidden xsDown>
          <Button variant="text" size="small">
            Subscribe
          </Button>
          <Button
            variant="text"
            size="small"
            className={classes.btnSigninSignup}
            href={headerSigninHref}
          >
            Sign in
          </Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            className={classes.btnSigninSignup}
            href={headerSignupHref}
          >
            Sign up
          </Button>
        </Hidden>
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
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
