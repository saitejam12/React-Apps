import React from "react";
import P2P from "./P2P";
import Solo from "./Solo";
import SelectGameMode from "./SelectGameMode";
import "./App.css";

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
        {this.state.gameMode === "Solo" ? (
          <Solo />
        ) : this.state.gameMode === "P2P" ? (
          <P2P />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
