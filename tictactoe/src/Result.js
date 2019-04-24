import React from "react";
class Result extends React.Component {
  render() {
    return (
      <div className="result" style={{ display: `${this.props.display}` }}>
        {this.props.gameStatus === "win" ? (
          <h3>YAY!! "{this.props.player}" Won. Wanna Play again?</h3>
        ) : this.props.gameStatus === "tie" ? (
          <h3>You Tied.</h3>
        ) : (
          <h3>You Lost. Try Again?</h3>
        )}
        <button
          onClick={() => {
            this.props.reset();
          }}
        >
          Play Again
        </button>
      </div>
    );
  }
}
export default Result;
