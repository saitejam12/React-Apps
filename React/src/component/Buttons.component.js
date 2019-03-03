import React, { Component } from "react";

import "./buttons.css";
class Buttons extends Component {
  constructor(props) {
    super(props);
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick(evt) {
    this.props.clickHandler(evt.target.id);
  }
  // btnClick = evt => {
  //   this.props.onClick(evt.target.id);
  // };

  render() {
    return (
      <div className="keys">
        <div>
          <button
            className=" operator cal-btn2 "
            id="AC"
            onClick={this.btnClick}
          >
            AC
          </button>
          <button
            className=" operator cal-btn2 "
            id="+/-"
            onClick={this.btnClick}
          >
            +/-
          </button>
          <button
            className=" operator cal-btn2 "
            id="%"
            onClick={this.btnClick}
          >
            %
          </button>
          <button
            className=" operator cal-btn1 "
            id="÷"
            onClick={this.btnClick}
          >
            ÷
          </button>
        </div>
        <div>
          <button className=" number cal-btn2 " id="7" onClick={this.btnClick}>
            7
          </button>
          <button className=" number cal-btn2 " id="8" onClick={this.btnClick}>
            8
          </button>
          <button className=" number cal-btn2 " id="9" onClick={this.btnClick}>
            9
          </button>
          <button
            className=" operator cal-btn1 "
            id="x"
            onClick={this.btnClick}
          >
            x
          </button>
        </div>
        <div>
          <button className=" number cal-btn2 " id="4" onClick={this.btnClick}>
            4
          </button>
          <button className=" number cal-btn2 " id="5" onClick={this.btnClick}>
            5
          </button>
          <button className=" number cal-btn2 " id="6" onClick={this.btnClick}>
            6
          </button>
          <button
            className=" operator cal-btn1 "
            id="-"
            onClick={this.btnClick}
          >
            -
          </button>
        </div>
        <div>
          <button className=" number cal-btn2 " id="1" onClick={this.btnClick}>
            1
          </button>
          <button className=" number cal-btn2 " id="2" onClick={this.btnClick}>
            2
          </button>
          <button className=" number cal-btn2 " id="3" onClick={this.btnClick}>
            3
          </button>
          <button
            className=" operator cal-btn1 "
            id="+"
            onClick={this.btnClick}
          >
            +
          </button>
        </div>
        <div>
          <button className=" number cal-btn0 " id="0" onClick={this.btnClick}>
            0
          </button>
          <button
            className=" operator cal-btn2 "
            id="."
            onClick={this.btnClick}
          >
            0
          </button>
          <button
            className=" operator cal-btn1 "
            id="="
            onClick={this.btnClick}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Buttons;
