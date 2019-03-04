import React from "react";
import "./style/display.css";
export default class Display extends React.Component {
  render() {
    return <div id="result">{this.props.value}</div>;
  }
}
