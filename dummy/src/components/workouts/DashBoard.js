import React from "react";
import { makeStyles, Drawer, AppBar, Toolbar, List } from "@material-ui/core";
import { Typography, Grid, Paper, Link, Container } from "@material-ui/core";
import { Divider, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DashBoard = () => {
  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DashBoard;
