import React, { Component } from "react";
class PiecesTakenDown extends Component {
  renderPiecesTakenDown = () => {
    let srNo = 0;
    return this.props.piecesDown.map((piece) => {
      // console.log(piece);
      if (piece) {
        srNo++;
        // console.log(pieceClassName);
        console.log(piece.pieceTakenDown);
        return (
          <li key={srNo}>
            <i key={srNo} className={`fas fa-chess-${piece.piece}`}>
              {""}
            </i>
          </li>
        );
      } else return <div>{""}</div>;
    });
  };
  render() {
    return (
      <div className="points-pieces">
        <div className="points-part">
          <p>+5</p>
        </div>
        <div className={`pieces-part ${this.props.whiteSide ? "mysides" : ""}`}>
          <ul>
            {" "}
            {this.props.piecesDown.length > 0
              ? this.renderPiecesTakenDown()
              : ""}{" "}
          </ul>
        </div>
      </div>
    );
  }
}

export default PiecesTakenDown;
