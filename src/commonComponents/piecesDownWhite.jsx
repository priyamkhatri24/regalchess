import React, { Component } from "react";
class PiecesDownWhite extends Component {
  state = {};
  render() {
    return (
      <div className="points-pieces">
        <div className="points-part">
          <p>+5</p>
        </div>
        <div className="pieces-part mysides">
          <ul>
            <li>
              <i className="fas fa-chess-knight"></i>
            </li>
            <li>
              <i className="fas fa-chess-pawn"></i>
            </li>
            <li>
              <i className="fas fa-chess-pawn"></i>
            </li>
            <li>
              <i className="fas fa-chess-rook"></i>
            </li>
            <li>
              <i className="fas fa-chess-king"></i>
            </li>
            <li>
              <i className="fas fa-chess-queen"></i>
            </li>
            <li>
              <i className="fas fa-chess-pawn"></i>
            </li>
            <li>
              <i className="fas fa-chess-rook"></i>
            </li>
            <li>
              <i className="fas fa-chess-knight"></i>
            </li>
            <li>
              <i className="fas fa-chess-pawn"></i>
            </li>
            <li>
              <i className="fas fa-chess-queen"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PiecesDownWhite;
