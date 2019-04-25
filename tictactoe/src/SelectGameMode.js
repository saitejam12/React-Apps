import React from "react";

class SelectGameMode extends React.Component {
  handleGame = side => {
    this.props.gameTypeHandle(side);
  };

  render() {
    return (
      <div className="Select" style={{ display: `${this.props.display}` }}>
        <p>Select Play Mode</p>
        <div className="GameMode">
          <div className="box" onClick={() => this.handleGame("Solo")}>
            <i className="fas fa-robot" />
          </div>
          <div className="box" onClick={() => this.handleGame("P2P")}>
            <i className="fas fa-user-friends" />
          </div>
        </div>
      </div>
    );
  }
}
export default SelectGameMode;
