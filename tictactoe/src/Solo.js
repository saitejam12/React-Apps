import React from "react";
import SelectSymbol from "./SelectSymbol";
import Result from "./Result";
import "./Solo.css";
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
      } else if (
        !(
          this.props.board[a] &&
          this.props.board[a] === this.props.board[b] &&
          this.props.board[a] === this.props.board[c]
        ) &&
        !this.props.board.includes(null)
      ) {
        this.props.gameHandle("tie");
      }
    }
  };

  computer = emptyBlocks => {
    let number = Math.floor(Math.random() * emptyBlocks.length);
    let comBlock = emptyBlocks[number];
    console.log(number, emptyBlocks[number], comBlock);
    return comBlock;
  };

  handleClick = index => {
    let newBoard = this.props.board;
    let emptyBlocks = [];

    if (this.props.board[index] === null) {
      newBoard[index] = this.props.player;
      newBoard.forEach((element, index) => {
        if (element === null) {
          emptyBlocks.push(index);
        }
      });
      newBoard[this.computer(emptyBlocks)] = this.props.computer;
      console.log(newBoard);
      this.setState({
        board: newBoard
      });
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
            {box}
          </div>
        ))}
      </div>
    );
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
class Solo extends React.Component {
  state = {
    board: Array(9).fill(null),
    gameCompleteState: "",
    player: "",
    computer: "",
    turn: 0,
    displaySelection: "",
    displayResult: "none"
  };
  symbolHandle = side => {
    if (side === "X") {
      this.setState({
        player: "X",
        computer: "O",
        displaySelection: "none"
      });
    } else if (side === "O") {
      this.setState({
        player: "O",
        computer: "X",
        displaySelection: "none"
      });
    }
  };

  gameHandle = gameState => {
    this.setState({
      gameCompleteState: gameState,
      displayResult: ""
    });
  };
  resetGame = () => {
    this.setState({
      board: Array(9).fill(null),
      gameCompleteState: "",
      player: "",
      turn: 0,
      displaySelection: "",
      displayResult: "none"
    });
  };
  render() {
    return (
      <div className="Solo">
        <SelectSymbol
          display={this.state.displaySelection}
          symbolHandle={this.symbolHandle}
        />
        <Board
          board={this.state.board}
          player={this.state.player}
          computer={this.state.computer}
          gameHandle={this.gameHandle}
          turn={this.state.turn}
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

export default Solo;
