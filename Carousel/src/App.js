import React, { Component } from "react";
import Slider from "./components/Slider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Carousel</header>
        <div className="container">
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
