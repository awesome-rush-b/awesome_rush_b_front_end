import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

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

const ITEM_HEIGHT = 48;

export default function MobileMenu() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ifOpen = Boolean(anchorEl);


  const headerSignupHref = "/register";
  const headerSigninHref = "/login";
  const headerSearchHref = "/searchPage";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={ifOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem  onClick={handleClose}>
          <Button variant="text" size="small">
            Subscribe
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            variant="text"
            size="small"
            className={classes.btnSigninSignup}
            href={headerSigninHref}
          >
            Sign in
          </Button>
        </MenuItem>
        <MenuItem  onClick={handleClose}>
          <Button
            variant="text"
            size="small"
            color="secondary"
            className={classes.btnSigninSignup}
            href={headerSignupHref}
          >
            Sign up
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
