import React, { Component } from "react";
import Display from "./components/Display";
import Panel from "./components/Panel";

import "./App.css";

class App extends Component {
  state = {
    first: null,
    second: null,
    operator: "",
    output: ""
  };

  handleDisplay = val => {
    if (this.state.output !== 0 && this.state.output !== "") {
      this.setState({
        output: this.state.output + val
      });
    } else {
      this.setState({
        output: val
      });
    }
    console.log(
      this.state.first,
      this.state.second,
      this.state.output,
      this.state.operator
    );
  };
  clear = () => {
    this.setState({ output: "" });
  };

  addDecimal = val => {
    if (this.state.output.indexOf(".") === -1) {
      this.setState({
        output: this.state.output + val
      });
    }
  };

  add = () => {
    this.setState({
      first: this.state.output,
      output: "",
      operator: "plus"
    });
  };

  subtract = () => {
    this.setState({
      first: this.state.output,
      output: "",
      operator: "minus"
    });
  };

  multiply = () => {
    this.setState({
      first: this.state.output,
      output: "",
      operator: "times"
    });
  };

  divide = () => {
    this.setState({
      first: this.state.output,
      output: "",
      operator: "divide"
    });
  };

  doOperations = () => {
    this.setState({ second: this.state.output });
    switch (this.state.operator) {
      case "plus":
        this.setState({
          output: parseInt(this.state.first) + parseInt(this.state.second)
        });

        break;
      case "minus":
        this.setState({
          output: parseInt(this.state.first) - parseInt(this.state.second)
        });
        break;
      case "times":
        this.setState({
          output: parseInt(this.state.first) * parseInt(this.state.second)
        });
        break;
      case "divide":
        this.setState({
          output: parseInt(this.state.first) / parseInt(this.state.second)
        });

        break;

      default:
        break;
    }
  };
  operationFunctions = {
    clearInput: this.clear,
    addition: this.add,
    subtraction: this.subtract,
    multiplication: this.multiply,
    division: this.divide,
    getResults: this.doOperations,
    addToDisplay: this.handleDisplay,
    decimal: this.addDecimal
  };

  render() {
    return (
      <div className="App">
        <Display display={this.state.output} />
        <Panel {...this.operationFunctions} />
      </div>
    );
  }
}

export default App;
