import React, { Component } from "react";
import { Link } from "react-router-dom";
import BotChessBoard from "../botGameComponents/botChessBoard";
import { getBestMove } from "../services/gameServices";

import PvpChatBox from "../commonComponents/pvpChatBox";
import PiecesTakenDown from "../commonComponents/piecesTakenDown";
const jsChess = require("js-chess-engine");

class TournamentGameDetail extends Component {
  constructor(props) {
    super(props);
    let boardConfiguration =
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    this.state = {
      boardConfiguration: boardConfiguration,
      game: new jsChess.Game(boardConfiguration),
    };
  }

  parseBestMove = async (string) => {
    string = await string.toUpperCase();
    return { from: `${string[0]}${string[1]}`, to: `${string[2]}${string[3]}` };
  };

  moveBlack = async () => {
    try {
      const bestMove = await getBestMove("user", {
        fen: this.state.boardConfiguration,
        depth: 1,
      });
      console.log(bestMove);
      const { from, to } = await this.parseBestMove(bestMove);
      console.log(from, to);
      const game = this.state.game;
      game.move(from, to);
      await this.setState({ game: game, boardConfiguration: game.exportFEN() });
    } catch (error) {
      const game = this.state.game;
      game.aiMove(3);
      await this.setState({ game: game, boardConfiguration: game.exportFEN() });
    }
  };
  renderWhiteMove = async (from, to) => {
    const prevBoardConfiguration = this.state.boardConfiguration;
    const jsonBoardConfiguration = new jsChess.status(
      this.state.boardConfiguration
    );
    if (jsonBoardConfiguration.turn === "white") {
      try {
        const boardConfiguration = jsChess.move(
          this.state.boardConfiguration,
          from,
          to
        );
        console.log(this.state.game.move(from, to));
        await this.setState({
          boardConfiguration: boardConfiguration,
          game: new jsChess.Game(boardConfiguration),
        });
      } catch (error) {
        console.log(error);
        await this.setState({
          boardConfiguration: prevBoardConfiguration,
          game: new jsChess.Game(prevBoardConfiguration),
        });
      }
    }
  };
  render() {
    return (
      <div className="content-grid  coaching-room">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-md-12">
              <div className="sidebar-box">
                <div className="row">
                  <div className="col-md-7">
                    <div className="Chess-board-part">
                      <div className="player-detail">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <div className="user-avatar small no-outline">
                              <div className="user-avatar-content">
                                <div className="hexagon-image-30-32">
                                  <img
                                    src="/common/img/users/Image_17.png"
                                    alt="User Image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="user-status-text small">Player 1</p>
                          <p className="user-status-title medium">
                            <Link className="bold" to="/">
                              Alix Smith
                            </Link>
                          </p>
                        </div>
                        <div className="game-time">
                          <ul>
                            <li>
                              {" "}
                              <img
                                src="/common/img/icons/watch.png"
                                alt="Watch Image"
                              />
                            </li>
                            <li>03</li>
                            <li>:</li>
                            <li>20</li>
                          </ul>
                        </div>
                      </div>
                      <div className="game-board-part">
                        <div className="board-back">
                          <img
                            src="/common/img/icons/chess_board.png"
                            alt="Chess Board Image"
                          />
                        </div>
                        <BotChessBoard
                          boardConfiguration={this.state.boardConfiguration}
                          moveWhiteFromTo={(from, to) =>
                            this.renderWhiteMove(from, to)
                          }
                          moveBlack={this.moveBlack}
                        />
                      </div>
                      <div className="player-detail">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <div className="user-avatar small no-outline">
                              <div className="user-avatar-content">
                                <div className="hexagon-image-30-32">
                                  <img
                                    src="/common/img/users/Image_15.png"
                                    alt="User Image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="user-status-text small">Player 2</p>
                          <p className="user-status-title medium">
                            <Link className="bold" to="/">
                              Jontty Smith
                            </Link>
                          </p>
                        </div>
                        <div className="game-time">
                          <ul>
                            <li>
                              {" "}
                              <img
                                src="/common/img/icons/watch.png"
                                alt="Watch Image"
                              />
                            </li>
                            <li>04</li>
                            <li>:</li>
                            <li>26</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="player-right-side mt-4">
                    <div className="points-pieces">
                         <div className="points-part">
                           <p>+5</p>
                         </div>
                         <div className="pieces-part">
                           <ul>
                             <li><i className="fas fa-chess-knight"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-rook"></i></li>
                             <li><i className="fas fa-chess-king"></i></li>
                             <li><i className="fas fa-chess-queen"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-rook"></i></li>
                             <li><i className="fas fa-chess-knight"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-queen"></i></li>
                           </ul>
                         </div>
                       </div>
                      <div className="chat-moves game-move-live">
                        <div className="moves-parts">
                          <div className="heading-parts">
                            <h3>Moves</h3>
                          </div>
                        </div>
                      </div>
                      <div className="points-pieces">
                         <div className="points-part">
                           <p>+5</p>
                         </div>
                         <div className="pieces-part mysides">
                           <ul>
                             <li><i className="fas fa-chess-knight"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-rook"></i></li>
                             <li><i className="fas fa-chess-king"></i></li>
                             <li><i className="fas fa-chess-queen"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-rook"></i></li>
                             <li><i className="fas fa-chess-knight"></i></li>
                             <li><i className="fas fa-chess-pawn"></i></li>
                             <li><i className="fas fa-chess-queen"></i></li>
                           </ul>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TournamentGameDetail;
