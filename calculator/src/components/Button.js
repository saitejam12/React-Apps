import React from "react";

const isOperator = value => {
  return !isNaN(value) || value === "." || value === "=";
};

const Button = props => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
