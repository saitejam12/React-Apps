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
        <button
          className=" operator cal-btn2 "
          id="AC"
          onClick={this.btnClick}
        />
        <button
          className=" operator cal-btn2 "
          id="+/-"
          onClick={this.btnClick}
        />
        <button
          className=" operator cal-btn2 "
          id="%"
          onClick={this.btnClick}
        />
        <button
          className=" operator cal-btn1 "
          id="÷"
          onClick={this.btnClick}
        />
        <button
          className=" number cal-btn2 "
          id="7"
          onClick={this.btnClick}
          value="7"
        />
        <button className=" number cal-btn2 " id="8" onClick={this.btnClick} />
        <button className=" number cal-btn2 " id="9" onClick={this.btnClick} />
        <button
          className=" operator cal-btn1 "
          id="x"
          onClick={this.btnClick}
        />
        <button className=" number cal-btn2 " id="4" onClick={this.btnClick} />
        <button className=" number cal-btn2 " id="5" onClick={this.btnClick} />
        <button className=" number cal-btn2 " id="6" onClick={this.btnClick} />
        <button
          className=" operator cal-btn1 "
          id="-"
          onClick={this.btnClick}
        />
        <button className=" number cal-btn2 " id="1" onClick={this.btnClick} />
        <button className=" number cal-btn2 " id="2" onClick={this.btnClick} />
        <button className=" number cal-btn2 " id="3" onClick={this.btnClick} />
        <button
          className=" operator cal-btn1 "
          id="+"
          onClick={this.btnClick}
        />
        <button className=" number cal-btn0 " id="0" onClick={this.btnClick} />
        <button
          className=" operator cal-btn2 "
          id="."
          onClick={this.btnClick}
        />
        <button
          className=" operator cal-btn1 "
          id="="
          onClick={this.btnClick}
        />
      </div>
    );
  }
}
export default Buttons;
