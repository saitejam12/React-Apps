import React from "react";
import {
  AppBar,
  Typography,
  Button,
  withStyles,
  Toolbar
} from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const Header = props => {
  const classes = props.classes;
  console.log(props.openModal);

  const handleOpen = e => {
    e.preventDefault();
    props.openModal();
  };
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            Workout Charts
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
