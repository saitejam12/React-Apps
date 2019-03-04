import React from "react";
import "./style/buttons.css";
export default class Buttons extends React.Component {
  state = {
    present: null,
    prev: null
  };
  handleClick = e => {
    console.log(e.target.id);
    this.setState({
      present: e.target.id
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="buttons">
        <div id="row">
          <button
            id="clear"
            className="btn operator"
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            id="+-"
            className="btn operator"
            onClick={this.handleClick.bind(this.id)}
          >
            &plusmn;
          </button>
          <button id="%" className="btn operator" onClick={this.handleClick}>
            %
          </button>
          <button
            id="/"
            className="btn operator orange"
            onClick={this.handleClick}
          >
            &divide;
          </button>
        </div>
        <div id="row">
          <button id="7" className="btn number" onClick={this.handleClick}>
            7
          </button>
          <button id="8" className="btn number" onClick={this.handleClick}>
            8
          </button>
          <button id="9" className="btn number" onClick={this.handleClick}>
            9
          </button>
          <button
            id="*"
            className="btn operator orange"
            onClick={this.handleClick}
          >
            &times;
          </button>
        </div>
        <div id="row">
          <button id="4" className="btn number" onClick={this.handleClick}>
            4
          </button>
          <button id="5" className="btn number" onClick={this.handleClick}>
            5
          </button>
          <button id="6" className="btn number" onClick={this.handleClick}>
            6
          </button>
          <button
            id="-"
            className="btn operator orange"
            onClick={this.handleClick}
          >
            &minus;
          </button>
        </div>
        <div id="row">
          <button id="1" className="btn number" onClick={this.handleClick}>
            1
          </button>
          <button id="2" className="btn number" onClick={this.handleClick}>
            2
          </button>
          <button id="3" className="btn number" onClick={this.handleClick}>
            3
          </button>
          <button
            id="+"
            className="btn operator orange"
            onClick={this.handleClick}
          >
            &#43;
          </button>
        </div>
        <div id="row">
          <button id="0" className="btn number zero" onClick={this.handleClick}>
            0
          </button>
          <button id="." className="btn operator" onClick={this.handleClick}>
            &sdot;
          </button>

          <button
            id="="
            className="btn operator orange"
            onClick={this.handleClick}
          >
            &#61;
          </button>
        </div>
      </div>
    );
  }
}
