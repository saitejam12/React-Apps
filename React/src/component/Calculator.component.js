import React, { Component } from "react";
import "./Button.component";
import "./Display.component";
class CalculatorComponent extends Component {
  render() {
    return (
      <div>
        <Display />
        <Button />
      </div>
    );
  }
}
export default CalculatorComponent;
