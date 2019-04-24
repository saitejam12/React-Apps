import React from "react";
import P2P from "./P2P";
import Solo from "./Solo";
import "./App.css";

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

class App extends React.Component {
  state = {
    gameMode: "",
    displayGameMode: ""
  };
  gameTypeHandle = side => {
    this.setState({
      gameMode: side,
      displayGameMode: "none"
    });
    console.log("APP", this.state);
  };
  render() {
    return (
      <div className="App">
        <SelectGameMode
          gameTypeHandle={this.gameTypeHandle}
          display={this.state.displayGameMode}
        />
        {this.state.gameMode === "Solo" ? <Solo /> : <P2P />}
      </div>
    );
  }
}

export default App;
