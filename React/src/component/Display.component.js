import React, { Component } from "react";
import "./display.css";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div>hi {this.props.value}</div>
      </div>
    );
  }
}
export default Display;
