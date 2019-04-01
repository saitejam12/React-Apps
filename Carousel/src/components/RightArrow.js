import React from "react";

const RightArrow = props => {
  return (
    <button
      className="rightArrow"
      onClick={props.goToNext}
      style={{
        textAlign: "center",

        backgroundColor: "transparent",
        outline: "none",
        border: "none",
        height: "100%",
        cursor: "pointer"
      }}
    >
      <i className="fas fa-chevron-right fa-2x" aria-hidden="true" />
    </button>
  );
};
export default RightArrow;
