import React from "react";

class SelectSymbol extends React.Component {
  handleSymbol = side => {
    this.props.symbolHandle(side);
  };

  render() {
    return (
      <div className="Select" style={{ display: `${this.props.display}` }}>
        <p>Select Player Symbol</p>
        <div className="symbol">
          <div className="box" onClick={() => this.handleSymbol("X")}>
            X
          </div>
          <div className="box" onClick={() => this.handleSymbol("O")}>
            O
          </div>
        </div>
      </div>
    );
  }
}

export default SelectSymbol;
