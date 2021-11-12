import React, { Component } from "react";
import Draggable from "react-draggable";
import { toast } from "react-toastify";
import * as pgnToMoveServices from "../services/pgnToMoveService";
const jsChess = require("js-chess-engine");
class SolutionChessBoard extends Component {
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

    if (
      this.state.game.checkMate === true &&
      this.state.game.turn === "white"
    ) {
      alert(`you have been check Mated`);
    } else if (
      this.state.game.check === true &&
      this.state.game.turn === "white"
    ) {
      alert(`you have been given check`);
    }
  }

  componentDidMount = async () => {
    if (this.state.game.turn === "black") {
      await this.props.moveBlack();
    }
    if (this.state.game.turn === "white") {
      await this.findSolutionMove();
    }
  };

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
        if (
          this.state.game.checkMate === true &&
          this.state.game.turn === "white"
        ) {
          alert(`you have been check Mated`);
        } else if (
          this.state.game.check === true &&
          this.state.game.turn === "white"
        ) {
          alert(`you have been given check`);
        }
      }, 300);
      if (this.state.game.turn === "black") {
        setTimeout(() => {
          this.props.moveBlack();
        }, 1000);
      }
      if (this.state.game.turn === "white") this.findSolutionMove();
    }
  };
  checkIfWhiteColourSelected = (piece) => {
    if (
      ["R", "N", "B", "K", "Q", "P"].includes(piece) &&
      this.state.game.turn === "white"
    ) {
      return true;
    } else return false;
  };

  findSolutionMove = async () => {
    if (this.props.whitePgn[this.props.whiteSolutionPgnIndex]) {
      const solutionMove = await pgnToMoveServices.getMoveForParticularPgn(
        this.props.boardConfiguration,
        this.props.whitePgn[this.props.whiteSolutionPgnIndex]
      );
      await this.setState({ solutionMove: solutionMove });
    } else this.setState({ solutionMove: {} });
  };

  selectPiece = async (e, squareId) => {
    if (
      this.state.game.turn === "white" &&
      this.checkIfWhiteColourSelected(this.state.game.pieces[squareId])
    ) {
      await this.setState({
        fromSelected: true,
        from: squareId,
        active: squareId,
      });
    }
  };
  selectBox = async (e, squareId) => {
    if (this.state.fromSelected) {
      await this.setState({ toSelected: true, to: squareId });
    }
    if (this.state.fromSelected && this.state.toSelected) {
      if (
        this.state.solutionMove.from != this.state.from ||
        this.state.solutionMove.to != this.state.to
      ) {
        this.setState({ active: "" });
        return;
      } else {
        await this.pushToParent();
      }
    }
  };
  pushToParent = async () => {
    if (this.state.fromSelected && this.state.toSelected) {
      this.props.moveWhiteFromTo(this.state.from, this.state.to);
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
          key={squareId}
          defaultPosition={{ x: 0, y: 0 }}
          position={{ x: 0, y: 0 }}
          onMouseDown={(e) => {
            this.selectPiece(e, squareId);
          }}
        >
          <i
            key={squareId}
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
        className={`square ${this.state.active === squareId ? "active" : ""} ${
          this.state.solutionMove.from &&
          this.state.solutionMove.from === squareId
            ? "solumove"
            : ""
        } ${
          this.state.solutionMove.to && this.state.solutionMove.to === squareId
            ? "solumove"
            : ""
        }`}
        key={squareId}
        id={squareId}
        value="div"
        onMouseUp={(e) => {
          this.selectBox(e, squareId);
        }}
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
    if (!this.state.solutionMove) return null;
    return (
      <div className="board-deasign">
        <div className="row-part">{this.renderChessBoard()}</div>
      </div>
    );
  }
}

export default SolutionChessBoard;
