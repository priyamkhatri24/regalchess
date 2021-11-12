import React, { Component } from "react";
import { Link } from "react-router-dom";
import BotChessBoard from "../botGameComponents/botChessBoard";
import { getBestMove } from "../services/gameServices";
import PgnDisplay from "../puzzleComponent/pgnDisplay";
import PvpChatBox from "../commonComponents/pvpChatBox";
import { Button, Modal } from "react-bootstrap";
import PiecesTakenDown from "../commonComponents/piecesTakenDown";
const jsChess = require("js-chess-engine");

class TournamentGameRoom extends Component {
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
  requestsendshowHide() {
    this.setState({ requestsendshowHide: !this.state.requestsendshowHide });
    console.log(this.state);
  }
  backTakeshowHide() {
    this.setState({ backTakeshowHide: !this.state.backTakeshowHide });
    console.log(this.state);
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
  handleModalShowHide2() {
    this.setState({ showHide2: !this.state.showHide2 });
    console.log(this.state);
  }
  render() {
    return (
      <>
      <div className="content-grid player-game-part coaching-room">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-3">
              <div className="upcomming-tournamnet">
                <div className="user-preview landscape tournamnet-game-leftpart">
                  <div className="tablepart">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>Player</th>
                          <th>Rating</th>
                          <th>Point</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td><img src="/common/img/users/Image_17.png" alt="User Image" /><span><img src="/common/img/icons/batch1.png" alt="Batch" /></span></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                        <tr>
                          <td>02</td>
                          <td><img src="/common/img/users/Image_16.png" alt="User Image" /><span><img src="/common/img/icons/batch2.png" alt="Batch" /></span></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                        <tr>
                          <td>03</td>
                          <td><img src="/common/img/users/Image_15.png" alt="User Image" /><span><img src="/common/img/icons/batch3.png" alt="Batch" /></span></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                        <tr>
                          <td>04</td>
                          <td><img src="/common/img/users/Image_17.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                        <tr>
                          <td>05</td>
                          <td><img src="/common/img/users/Image_15.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                        <tr>
                          <td>06</td>
                          <td><img src="/common/img/users/Image_16.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                        <tr>
                          <td>07</td>
                          <td><img src="/common/img/users/Image_15.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                        
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
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
                                    onClick={() => this.handleModalShowHide2()}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                  
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
                            src="/common/img/icons/chess board 1.png"
                            alt="Chess Board Image"
                          />
                        </div>
                        {/* <BotChessBoard
                          boardConfiguration={this.state.boardConfiguration}
                          moveWhiteFromTo={(from, to) =>
                            this.renderWhiteMove(from, to)
                          }
                          moveBlack={this.moveBlack}
                        /> */}
                      </div>
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
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="player-right-side">
                      <div className="top-option-button">
                        <ul>
                          <li>
                            <button className="btn primary-btn" onClick={() => this.backTakeshowHide()}>
                              Take Back
                            </button>
                          </li>
                          <li>
                            <button className="btn primary-btn">Draw</button>
                          </li>
                          <li>
                            <button className="btn primary-btn" onClick={() => this.requestsendshowHide()}>Rematch</button>
                          </li>
                        </ul>
                      </div>
                      <Modal
                        show={this.state.backTakeshowHide}
                        className="backtake-modal"
                      >
                        <Modal.Body>
                          <div className="main-section">
                            <div className="modal-cards">
                              <div className="top-heading text-center">
                                <img
                                  src="/common/img/users/Image_17.png"
                                  alt="User Image"
                                />
                                <h3>Mo Danish </h3>
                                <p>
                                  wants to  Take back
                                </p>
                              </div>
                              <div className="rewuest-btn">
                                <button onClick={() => this.backTakeshowHide()} className="reject">
                                  No
                          </button>
                          <button onClick={() => this.backTakeshowHide()}>
                                  Yes
                          </button>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                      <Modal
                        show={this.state.requestsendshowHide}
                        className="winning-modal"
                      >
                        <Modal.Body>
                          <div className="main-section">
                            <div className="modal-cards">
                              <div className="top-heading text-center">
                                <h2>Congratulation!</h2>
                                <img
                                  src="/common/img/users/Image_17.png"
                                  alt="User Image"
                                />
                                <h3>Mo Danish </h3>
                                <p>
                                  Winnner
                                </p>
                              </div>
                              <div className="rewuest-btn">
                                <button onClick={() => this.requestsendshowHide()}>
                                  Go to Lobby
                          </button>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>

                      <div className="points-pieces mt-4">
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

      <Modal show={this.state.showHide2} className="winner-pop"  >
          <Modal.Body >
          <Link
      className="close-icon"
      onClick={() => this.handleModalShowHide2()}
    >
      <i className="fa fa-times"></i>
    </Link>

          <div className="tournament-result-section pb-0">
          <div className="row">
          
              <div className="main-section">
            
            <div className="result-parts text-center">
              <h2>Congratulations!</h2>
              <img src="/common/img/coach/winner.png" alt="Winner Image" />
              <h3>Winner</h3>
              <h4>Payshvi Ghodwall</h4>
              <div className="border-middle mt-3 mb-3"></div>
              <h4>Next Match</h4>
              <div className="d-flex justify-content-between ml-3 mr-3">
                <div className="win-img">
              
                  <img
                        src="/common/img/icons/profile_image.png"
                        alt="User Icon"
                        style={{width:"50px"}}
                        className="mb-2"
                        
                      />
                         <h6   style={{fontSize:"12px"}} className="mb-1">Ira Hanny</h6>
                         <p  style={{fontSize:"12px"}}>3456</p>
                      </div>
                      <div className="win-img ">
              
              <img
                    src="/common/img/icons/p123.png"
                    alt="User Icon"
                    style={{width:"50px",marginLeft:"70px"}}
                  
                    
                  />
                  </div>
                      <div className="user-short-description landscape  tiny padd-left-50"></div>
                    
                      <div className="win-img">
              
              <img
                    src="/common/img/icons/profile_image.png"
                    alt="User Icon"
                    style={{width:"50px"}}
                    className="mb-2"
                    
                  />
                   <h6   style={{fontSize:"12px"}}  className="mb-1">Ira Hanny</h6>
                   <p  style={{fontSize:"12px"}}>3456</p>
                  </div>
        


            
              </div>
            
          
            
          
            
            </div>
          
          
            </div>
            </div>
            </div>
           
          </Modal.Body>
          </Modal>
          </>
    );
  }
}

export default TournamentGameRoom;
