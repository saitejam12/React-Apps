import React from "react";

const displaySty = {
  height: "2.5em",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  fontSize: "200%",
  fontWeight: "bold",
  padding: "10px"
};
export default function Display(props) {
  return (
    <div className="display" style={displaySty}>
      {props.display}
    </div>
  );
}
