import React, { Component } from "react";
import { Link } from "react-router-dom";
import BotChessBoard from "./botChessBoard";
import { getBestMove } from "../services/gameServices";
import { Button, Modal } from "react-bootstrap";
const jsChess = require("js-chess-engine");


class BotGamePage extends Component {
  constructor(props) {
    super(props);
    let boardConfiguration =
      "rnbqkbn/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
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

      const { from, to } = await this.parseBestMove(bestMove);

      const game = this.state.game;
      game.move(from, to);
      await this.setState({ game: game, boardConfiguration: game.exportFEN() });
    } catch (error) {
      const game = this.state.game;
      const aiMove = jsChess.aiMove(this.state.boardConfiguration, 3);

      let from;
      for (let key in aiMove) {
        from = key;
      }
      let to = aiMove[from];

      game.move(from, to);
      await this.setState({ game: game, boardConfiguration: game.exportFEN() });
    }
  };
  handleModalShowHide2() {
    this.setState({ showHide2: !this.state.showHide2 });
    console.log(this.state);
  }
  handleModalShowHide3() {
    this.setState({ showHide3: !this.state.showHide3 });
    console.log(this.state);
  }
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

        await this.setState({
          boardConfiguration: boardConfiguration,
          game: new jsChess.Game(boardConfiguration),
        });
      } catch (error) {
        await this.setState({
          boardConfiguration: prevBoardConfiguration,
          game: new jsChess.Game(prevBoardConfiguration),
        });
      }
    }
  };
  render() {
  
    return (
      <>
      <div className="content-grid game-part">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar-box">
               
              <div className="play-with">
                        <div className="heading-part">
                          <h3>Play With</h3>
                        </div>
                        <div className="list-part">
                          <ul>
                            <li
                             
                              onClick={() => this.toggleFriend()}
                            >
                              <button className="button medium secondary"><Link  style={{color:"white"}}>Friend </Link></button>
                            </li>
                            </ul>
                           <ul>
                            <li
                             
                              onClick={() => this.toggleRandom()}
                            >
                               <button className="button medium secondary"><Link  style={{color:"white"}}>Random </Link></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    
                      
                    

    
                        <div className="play-with">
                          <div className="heading-part mt-5">
                            <h3>Game Mode</h3>
                          </div>
                          <div className="list-part">
                            <ul>
                              <li
                                className={
                                  this.state.toggle5 >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggle5()}
                              >

<button className="button medium secondary"><Link  style={{color:"white"}}>5 Minutes </Link></button>
                              </li>
                              </ul>
                              <ul>
                              <li  className={
                                  this.state.toggle10 >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggle10()}>
                                <button className="button medium secondary"><Link  style={{color:"white"}}>10 Minutes </Link></button>
                              </li>
                              </ul>
                              <ul>
                              <li  className={
                                  this.state.toggle15 >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggle15()}>
                               <button className="button medium secondary"><Link  style={{color:"white"}}>15 Minutes </Link></button>
                              </li>
                              </ul>
                              <ul>
                              <li  className={
                                  this.state.toggleun >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggleun()}>
                                <button className="button medium secondary"><Link  style={{color:"white"}}>Unlimited</Link></button>
                              </li>
                            </ul>
                           
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
                                onClick={() => this.handleModalShowHide3()}
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
                            <Link className="bold mt-2" to="/" >
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

          <div className="tournament-result-section">
          <div className="row">
          
              <div className="main-section">
            
            <div className="result-parts text-center">
              <h2>Congratulations!</h2>
    
              <img src="/common/img/coach/Winner (2).png" alt="Winner Image" />
              <h3>Winner</h3>
              <h4>Payshvi Ghodwall</h4>


              <div className="border-middle mt-3 mb-3"></div>
              <h4>Earned Tokens</h4>
              <div className="earn-token d-flex justify-content-center mt-4">
                <img className="token-imgg mr-2" src="/common/img/icons/Tokens.png"/>
                <h3 className="mt-1 ml-2 token-text">3,201</h3>
              


              </div>
              <div className="">
              <p className="text-center token-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. </p>
                </div>
             
          
            
            
             
          
            </div>
            </div>
            </div>
            </div>
           
          </Modal.Body>
          </Modal>
          <Modal show={this.state.showHide3} className="winner-pop"  >
          <Modal.Body >
          <Link
      className="close-icon"
      onClick={() => this.handleModalShowHide3()}
    >
      <i className="fa fa-times"></i>
    </Link>

          <div className="tournament-result-section">
          <div className="row">
          
              <div className="main-section">
            
            <div className="result-parts text-center">
              <h2>Try Again!</h2>
    
              <img src="/common/img/coach/Winner (2).png" alt="Winner Image" />
              <h3>You Lose</h3>
              <h4>Henry Cavill



</h4>


              <div className="border-middle mt-3 mb-3"></div>
              <h4>Lost Tokens</h4>
              <div className="earn-token d-flex justify-content-center mt-4">
                <img className="token-imgg mr-2" src="/common/img/icons/Tokens.png"/>
                <h3 className="mt-1 ml-2 token-text">1,201</h3>
              


              </div>
              <div className="">
              <p className="text-center token-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. </p>
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

export default BotGamePage;
