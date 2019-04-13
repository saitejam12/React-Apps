import React from "react";
import "./Panel.css";
const isOperator = value => {
  return (!isNaN(value) && value !== null) || value === "." || value === "=";
};

const TTon = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleBtnClick(props.children)}
  >
    {props.children}
  </div>
);

const Panel = props => {
  return (
    <div className="panel-wrapper">
      <div className="row">
        <TTon handleBtnClick={props.clearInput} name="C">
          {" "}
          C{" "}
        </TTon>
      </div>
      <div className="row">
        <TTon handleBtnClick={props.addToDisplay} name="7">
          7
        </TTon>
        <TTon handleBtnClick={props.addToDisplay} name="8">
          8
        </TTon>
        <TTon handleBtnClick={props.addToDisplay} name="9">
          9
        </TTon>
        <TTon handleBtnClick={props.division} name="/">
          {" "}
          &divide;{" "}
        </TTon>
      </div>
      <div className="row">
        <TTon handleBtnClick={props.addToDisplay} name="4">
          4
        </TTon>
        <TTon handleBtnClick={props.addToDisplay} name="5">
          5
        </TTon>
        <TTon handleBtnClick={props.addToDisplay} name="6">
          6
        </TTon>
        <TTon handleBtnClick={props.multiplication} name="*">
          {" "}
          &times;{" "}
        </TTon>
      </div>
      <div className="row">
        <TTon handleBtnClick={props.addToDisplay} name="1">
          1
        </TTon>
        <TTon handleBtnClick={props.addToDisplay} name="2">
          2
        </TTon>
        <TTon handleBtnClick={props.addToDisplay} name="3">
          3
        </TTon>
        <TTon handleBtnClick={props.subtraction} name="-">
          {" "}
          &minus;{" "}
        </TTon>
      </div>
      <div className="row">
        <TTon handleBtnClick={props.addToDisplay} name="0">
          0
        </TTon>
        <TTon handleBtnClick={props.decimal} name=".">
          .
        </TTon>
        <TTon handleBtnClick={props.getResults} name="=">
          =
        </TTon>
        <TTon handleBtnClick={props.addition} name="+">
          {" "}
          +{" "}
        </TTon>
      </div>
    </div>
  );
};
export default Panel;
