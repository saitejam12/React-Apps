import React from "react";
import Button from "./Button";
import "./Panel.css";

const Panel = props => {
  return (
    <div className="button-panel">
      <div className="row">
        <Button handleClick={props.handleInput}>C</Button>
      </div>
      <div className="row">
        <Button handleClick={props.handleInput}>7</Button>
        <Button handleClick={props.handleInput}>8</Button>
        <Button handleClick={props.handleInput}>9</Button>
        <Button handleClick={props.handleInput}> &divide; </Button>
      </div>
      <div className="row">
        <Button handleClick={props.handleInput}>4</Button>
        <Button handleClick={props.handleInput}>5</Button>
        <Button handleClick={props.handleInput}>6</Button>
        <Button handleClick={props.handleInput}> &times; </Button>
      </div>
      <div className="row">
        <Button handleClick={props.handleInput}>1</Button>
        <Button handleClick={props.handleInput}>2</Button>
        <Button handleClick={props.handleInput}>3</Button>
        <Button handleClick={props.handleInput}> &minus; </Button>
      </div>
      <div className="row">
        <Button handleClick={props.handleInput}>0</Button>
        <Button handleClick={props.handleInput}>.</Button>
        <Button handleClick={props.handleInput}>=</Button>
        <Button handleClick={props.handleInput}>+</Button>
      </div>
    </div>
  );
};

export default Panel;
