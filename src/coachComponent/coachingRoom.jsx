import React, { Component } from "react";
import { Link } from "react-router-dom";
import BotChessBoard from "../botGameComponents/botChessBoard";
import { getBestMove } from "../services/gameServices";

import PvpChatBox from "../commonComponents/pvpChatBox";
import { Button, Modal } from "react-bootstrap";
import TournamentMatch from "./tournamentMatch";
import PiecesTakenDown from "../commonComponents/piecesTakenDown";
const jsChess = require("js-chess-engine");

class CoachingRoom extends Component {
  constructor(props) {
    super(props);
    let boardConfiguration =
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    this.state = {
      boardConfiguration: boardConfiguration,
      game: new jsChess.Game(boardConfiguration),
    };
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
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
      <div className="content-grid player-game-part coaching-room">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-md-2">
              <div className="sidebar-box video-call">
                <img src="/common/img/coach/student.jpg" alt="student" />
                <p className="web-name">Student</p>
              </div>
              <div className="sidebar-box video-call">
                <img src="/common/img/coach/coach.jpg" alt="coach" />
                <p className="web-name">My Cam</p>
                <div className="webcap-option">
                  <Link to="#">
                    <i class="fa fa-video-camera"></i>
                  </Link>
                  <Link to="#">
                    <i class="fa fa-microphone"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="sidebar-box">
                <div className="row">
                  <div className="col-md-6">
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
                          <p className="user-status-text small">Student</p>
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
                        <div className="edit-status">
                          <div className="edit-links">
                            <Link onClick={() => this.handleModalShowHide()}>
                              <img
                                src="/common/img/icons/edit.png"
                                alt="Watch Image"
                              />
                            </Link>
                            |
                            <Link to="/">
                              <img
                                src="/common/img/icons/circle.png"
                                alt="Watch Image"
                              />
                            </Link>
                          </div>
                          <Modal
                            show={this.state.showHide}
                            className="editpart-modal"
                          >
                            <Modal.Body>
                              <div className="main-section">
                                <Link
                                  className="close-icon"
                                  onClick={() => this.handleModalShowHide()}
                                >
                                  <i className="fa fa-times"></i>
                                </Link>
                                <div className="split mb-3">
                                  <div className="form-item">
                                    <div className="form-input small active">
                                      <label>
                                        Enter time for the Tournament Match
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="00:00:00"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="split mb-3">
                                  <div className="form-item">
                                    <div className="form-input small active">
                                      <label>Select Side</label>
                                      <select>
                                        <option>White</option>
                                        <option>Black</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Modal.Body>
                          </Modal>
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
                  <div className="col-md-6">
                    <div className="player-right-side">
                      <div className="top-option-button">
                        <ul>
                          <li>
                            <button className="btn primary-btn">
                              Take Back
                            </button>
                          </li>
                          <li>
                            <button className="btn primary-btn">Draw</button>
                          </li>
                          <li>
                            <button className="btn primary-btn">Rematch</button>
                          </li>
                        </ul>
                      </div>
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
                      <div className="chat-moves">
                         <div className="chatt-parts">
                            <div className="heading-parts">
                               <h3>Chat</h3>
                            </div>
                            <div className="chatt-messege">
                              <ul>
                                <li className="incomming"><p>Hi Nimish</p></li>
                                <li className="outgoining"><p>How Are u?</p></li>
                                <li className="incomming"><p>Nice Play</p></li>
                                <li className="outgoining"><p>Thank you</p></li>
                                <li className="incomming"><p>Welcome</p></li>
                              </ul>
                            </div>
                            <div className="text-center">
                                <div className="suggection-messege">
                                    <ul>
                                      <li><Link to="#">Thanks</Link></li>
                                      <li><Link to="#">Okay</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="reply-box">
                                <input type="text" className="form-contral"></input>
                                <button className="btn primary-btn"><i className="fa fa-paper-plane"></i></button>
                            </div>
                         </div>
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
                      <div className="top-option-button footer-options">
                        <ul>
                          <li>
                            <button className="btn primary-btn">Set</button>
                          </li>
                          <li>
                            <button className="btn primary-btn">Start</button>
                          </li>
                          <li>
                            <button className="btn primary-btn">
                              Start New
                            </button>
                          </li>
                          <li>
                            <button className="btn primary-btn">End</button>
                          </li>
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
    );
  }
}

export default CoachingRoom;
