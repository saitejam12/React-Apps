import React from "react";

const LeftArrow = props => {
  return (
    <button
      className="leftArrow"
      onClick={props.goToPrev}
      style={{
        textAlign: "center",
        overflow: "hidden",
        background: "transparent",
        outline: "none",
        border: "transparent",
        height: "100%",
        cursor: "pointer"
      }}
    >
      <i className="fas fa-chevron-left fa-2x" aria-hidden="true" />
    </button>
  );
};

export default LeftArrow;
