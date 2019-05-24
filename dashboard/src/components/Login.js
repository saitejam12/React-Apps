import React, { useState } from "react";
//import logo from "../logo.svg";
import { Redirect } from "react-router-dom";
import { Button, CssBaseline, TextField, Link, Grid } from "@material-ui/core";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (!!username && !!password) {
      setLoading(true);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="email"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          {submitted && !username && (
            <Typography variant="p">Username Required</Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {submitted && !password && (
            <Typography variant="p">Password Required</Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        {loading && <Redirect to="/Dashboard" />}
      </div>
    </Container>
  );
};

export default Login;

// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

// export class Login extends Component {
//   state = {
//     username: "",
//     password: "",
//     loading: false,
//     submitted: false,
//     error: ""
//   };

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       submitted: true
//     });
//     const { username, password } = this.state;
//     if (!!username && !!password) {
//       this.setState({
//         loading: true
//       });
//     }
//   };
//   render() {
//     const { username, password, submitted, loading, error } = this.state;
//     return (
//       <div>
//         <h2>Login</h2>
//         <form name="loginForm" onSubmit={this.handleSubmit}>
//           <label>User-Name</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.handleChange}
//           />
//           <br />
//           {submitted && !username && <div>Username is Required</div>}
//           <br />
//           <label>Password</label>
//           <input
//             name="password"
//             type="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <br />
//           {submitted && !password && <div>Password is Required</div>}
//           <br />
//           <button onClick={this.handleSubmit}>Login</button>
//           {error && <div>{error}</div>}
//         </form>
//         {loading && <Redirect to="/Dashboard" />}
//       </div>
//     );
//   }
// }

// export default Login;
