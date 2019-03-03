import React, { Component } from "react";
//import SearchBar from "./templates/SearchBar";
//import CurrentWeather from "./templates/CurrentWeather";
import Forecast from "./templates/Forecast";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Application">
        <div className="Header">Weather App </div>
        <Forecast />
      </div>
    );
  }
}

export default App;
