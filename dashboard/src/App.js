import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Login, HomePage } from "./components/index";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
