import React, { useState } from "react";
import {
  Typography,
  Button,
  Paper,
  Fab,
  Grid,
  Card,
  TextField,
  withStyles
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30rem",
    height: "30vh"
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    alignItems: "space-between"
  },
  item: {
    padding: 10
  }
}));

const AuthModal = () => {
  const classes = useStyles();
  const [display, setdisplay] = useState(true);

  const handleClose = () => {
    setdisplay("none");
  };
  console.log(display);
  return (
    <div>
      <Paper className={classes.box} style={{ display: `${display}` }}>
        <Grid item className={classes.top}>
          <Typography className={classes.item} variant="h5">
            Login
          </Typography>
          <Fab className={classes.item} size="small" onClick={handleClose}>
            X
          </Fab>
        </Grid>
        <Grid>
          <TextField label="User Name" required className={classes.item} />
          <br />
          <TextField
            label="Password"
            type="password"
            required
            className={classes.item}
          />
        </Grid>
        <Grid>
          <Button variant="contained" color="primary" className={classes.item}>
            Login
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default AuthModal;
