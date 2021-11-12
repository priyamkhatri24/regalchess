import React, { Component } from "react";
import { toast } from "react-toastify";
import Draggable from "react-draggable";
const jsChess = require("js-chess-engine");
class ChessBoardPuzzle extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      game: new jsChess.status(this.props.boardConfiguration),
      fromSelected: false,
      toSelected: false,
      from: "",
      to: "",
      active: "",
    };

    if (this.state.game.checkMate === true) {
      alert(`${this.state.game.turn} have been check Mate`);
    } else if (this.state.game.check === true) {
      alert(`${this.state.game.turn} have been given check`);
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props !== prevProps) {
      await this.setState({
        game: new jsChess.status(this.props.boardConfiguration),
        fromSelected: false,
        toSelected: false,
        from: "",
        to: "",
        active: "",
      });
      setTimeout(() => {
        if (this.state.game.checkMate === true) {
          alert(`${this.state.game.turn} have been check Mate`);
        } else if (this.state.game.check === true) {
          alert(`${this.state.game.turn} have been given check`);
        }
      }, 300);
    }
  };

  checkIfRightColourSelected = (piece) => {
    console.log(piece);
    if (
      ["R", "N", "B", "K", "Q", "P"].includes(piece) &&
      this.state.game.turn === "white"
    ) {
      return true;
    }
    if (
      ["r", "n", "b", "k", "q", "p"].includes(piece) &&
      this.state.game.turn === "black"
    ) {
      return true;
    } else return false;
  };

  select = async (e, squareId) => {
    if (
      !this.state.fromSelected &&
      this.state.game.pieces[squareId] &&
      this.checkIfRightColourSelected(this.state.game.pieces[squareId])
    ) {
      await this.setState({
        fromSelected: true,
        from: squareId,
        active: squareId,
      });
    } else if (this.state.fromSelected) {
      await this.setState({ toSelected: true, to: squareId });
    }
    this.pushToParent();
  };
  pushToParent = () => {
    if (this.state.fromSelected && this.state.toSelected) {
      this.props.moveFromTo(this.state.from, this.state.to);
      this.setState({
        fromSelected: false,
        toSelected: false,
        from: "",
        to: "",
      });
    }
  };
  findClassName = (piece) => {
    switch (piece) {
      case "R":
        return "rook cpw";
        break;
      case "N":
        return "knight cpw";
        break;
      case "B":
        return "bishop cpw";
        break;
      case "K":
        return "king cpw";
        break;
      case "Q":
        return "queen cpw";
        break;
      case "P":
        return "pawn cpw";
        break;
      case "r":
        return "rook cpb";
        break;
      case "n":
        return "knight cpb";
        break;
      case "b":
        return "bishop cpb";
        break;
      case "k":
        return "king cpb";
        break;
      case "q":
        return "queen cpb";
        break;
      case "p":
        return "pawn cpb";
        break;
    }
  };
  renderChessPiece = (squareId) => {
    if (this.state.game.pieces[squareId]) {
      const piece = this.state.game.pieces[squareId];
      const className = this.findClassName(piece);
      return (
        <Draggable
          defaultPosition={{ x: 0, y: 0 }}
          position={{ x: 0, y: 0 }}
          onMouseDown={(e) => {
            this.select(e, squareId);
          }}
        >
          <i
            value="piece"
            className={`${
              this.state.active === squareId ? "fad" : "fas"
            } fa-chess-${className} ${
              this.state.active === squareId ? "active" : ""
            }`}
          ></i>
        </Draggable>
      );
    } else return;
  };
  renderSquare = (squareId) => {
    return (
      <div
        className={`square ${this.state.active === squareId ? "active" : ""}`}
        id={squareId}
        value="div"
        onMouseUp={(e) => this.select(e, squareId)}
      >
        {this.renderChessPiece(squareId)}
      </div>
    );
  };
  renderChessBoard = () => {
    let chessBoard = [];
    for (let i = 8; i >= 1; i--) {
      for (let j = 65; j <= 72; j++) {
        const squareId = `${String.fromCharCode(j)}${i}`;
        chessBoard.push(squareId);
      }
    }
    return chessBoard.map((squareId) => {
      return this.renderSquare(squareId);
    });
  };

  render() {
    return (
      <div className="board-deasign">
        <div className="row-part">{this.renderChessBoard()}</div>
      </div>
    );
  }
}

export default ChessBoardPuzzle;
