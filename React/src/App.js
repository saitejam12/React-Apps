import React, { Component } from "react";
//import CalculatorComponent from "./component/Calculator.component";
import Calculate from "./logic/Calculate";
import Buttons from "./Component/Buttons.component";
import Display from "./component/Display.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
    this.handleclick = this.handleclick.bind(this);
  }
  // handleclick(value) {
  //   if (!isNaN(value)) {
  //     this.setState({ total: parseInt(value) + this.state.total });
  //     console.log(`handle click ${value} - ${this.state.total}`);
  //   }
  // }
  handleClick(value) {
    if (!isNaN(value)) {
      handleClick => {
        this.setState(Calculate(this.state, handleClick));
      };
    }
  }
  render() {
    return (
      <div>
        <Display value={this.state.total || this.state.value || "0"} />
        <Buttons clickHandler={this.handleclick} />
      </div>
    );
  }
}
export default App;
