import React from "react";
import SelectSymbol from "./SelectSymbol";
import Result from "./Result";
import "./P2P.css";
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
class Board extends React.Component {
  checkWinner = () => {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if (
        this.props.board[a] &&
        this.props.board[a] === this.props.board[b] &&
        this.props.board[a] === this.props.board[c]
      ) {
        this.props.gameHandle("win");
      } else {
        this.props.gameHandle("tie");
      }
    }
  };

  handleClick = index => {
    let newBoard = this.props.board;
    if (this.props.board[index] === null) {
      newBoard[index] = this.props.player;

      this.setState({
        board: newBoard
      });
      this.props.playerhandle();
    }
    this.checkWinner();
  };
  render() {
    return (
      <div className="Board">
        {this.props.board.map((box, index) => (
          <div
            className="box"
            key={index}
            onClick={() => this.handleClick(index)}
          >
            {box}{" "}
          </div>
        ))}
      </div>
    );
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
class P2P extends React.Component {
  state = {
    board: Array(9).fill(null),
    gameCompleteState: "",
    playerSymbolSelect: false,
    player: "",
    displaySelection: "",
    displayResult: "none"
  };
  symbolHandle = side => {
    this.setState({
      player: side,
      displaySelection: "none"
    });
    console.log(side);
    console.log(this.state);
  };

  playerhandle = () => {
    this.setState({
      player: this.state.player === "X" ? "O" : "X"
    });
  };

  gameHandle = gameState => {
    this.setState({
      gameCompleteState: gameState,
      displayResult: "",
      player: this.state.player === "X" ? "O" : "X"
    });
  };
  resetGame = () => {
    this.setState({
      board: Array(9).fill(null),
      gameCompleteState: "",
      playerSymbolSelect: false,
      player: "",
      displaySelection: "",
      displayResult: "none"
    });
  };
  render() {
    return (
      <div className="P2P">
        <SelectSymbol
          display={this.state.displaySelection}
          symbolHandle={this.symbolHandle}
        />
        <Board
          board={this.state.board}
          player={this.state.player}
          playerhandle={this.playerhandle}
          gameHandle={this.gameHandle}
        />
        <Result
          display={this.state.displayResult}
          gameStatus={this.state.gameCompleteState}
          winner={this.state.player}
          reset={this.resetGame}
          player={this.state.player}
        />
      </div>
    );
  }
}

export default P2P;
