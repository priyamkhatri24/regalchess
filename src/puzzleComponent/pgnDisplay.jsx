import React, { Component } from "react";
class PgnDisplay extends Component {
  state = {};
  findWhichPieceItIs = (piece) => {
    switch (piece) {
      case "R":
        return "rook ";
        break;
      case "N":
        return "knight ";
        break;
      case "B":
        return "bishop ";
        break;
      case "K":
        return "king ";
        break;
      case "Q":
        return "queen ";
        break;
      case "c":
        return "pawn ";
        break;
      case "r":
        return "rook";
        break;
      case "n":
        return "knight";
        break;
      case "b":
        return "bishop";
        break;
      case "k":
        return "king";
        break;
      case "q":
        return "queen";
        break;
      case "c":
        return "pawn";
        break;
      case "o":
        return "";
        break;
      default:
        return "pawn";
    }
  };
  renderWhiteMoves = () => {
    return (
      <div className="whitemoves">
        <ul>
          {this.props.whitePgn.map((move) => {
            return (
              <li key={move}>
                <p>
                  <i
                    className={`fas fa-chess-${this.findWhichPieceItIs(
                      move[0]
                    )}`}
                  ></i>
                  {move.length > 2
                    ? move[0] === "o"
                      ? move
                      : move.substring(1)
                    : move}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  renderBlackMoves = () => {
    return (
      <div className="blackmoves">
        <ul>
          {this.props.blackPgn.map((move) => {
            return (
              <li>
                <p>
                  <i
                    className={`fas fa-chess-${this.findWhichPieceItIs(
                      move[0]
                    )}`}
                  ></i>
                  {move.length > 2
                    ? move[0] === "o"
                      ? move
                      : move.substring(1)
                    : move}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  renderPgn = () => {
    return (
      <div className="moves-detail">
        {this.renderWhiteMoves()}
        {this.renderBlackMoves()}
      </div>
    );
  };
  render() {
    if (!this.props.whitePgn || !this.props.blackPgn) return null;
    return (
      <div className=" puzzle-moves-page">
        <div className="headingpart">
          <h4>Moves</h4>
        </div>
        <div className="moves-pices">{this.renderPgn()}</div>
      </div>
    );
  }
}

export default PgnDisplay;
