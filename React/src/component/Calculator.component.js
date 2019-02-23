import React, { Component } from "react";
import Buttons from "./Buttons.component";
import Display from "./Display.component";
class CalculatorComponent extends Component {
  render() {
    return (
      <div>
        <Display />
        <Buttons />
      </div>
    );
  }
}
export default CalculatorComponent;
