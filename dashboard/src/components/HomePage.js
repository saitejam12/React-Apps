import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80vh"
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {" "}
              Welcome
            </Typography>
            <Link to="/Login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="React-Logo" />
      </div>
    </div>
  );
};

export default HomePage;
