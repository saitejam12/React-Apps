import React, { Component } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Calculator</header>
        <div className="components">
          <Display />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
