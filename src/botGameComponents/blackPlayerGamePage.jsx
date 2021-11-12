import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBestMove } from "../services/gameServices";
import PiecesTakenDown from "../commonComponents/piecesTakenDown";
import PvpChatBox from "../commonComponents/pvpChatBox";
import { Button, Modal } from "react-bootstrap";

import PgnDisplay from "../puzzleComponent/pgnDisplay";
import * as moveToPgnServices from "../services/moveToPgnServices";
import * as friendRequestService from "../services/friendRequestService";
import { findPieceTakenDown } from "../services/registerationServices/findPiecesTakenDown";
import PvpChessBoardBlack from "./pvpChessBoardBlack";
import GameTimer from "../commonComponents/gameTimer";
import TakeBackRequestModal from "./takeBackRequestModal";
import AddFriendSendRequestModal from "./addFriendSendRequestModal";

const jsChess = require("js-chess-engine");

class BlackPlayerVsPlayerGamePage extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log(this.props);
    let boardConfiguration =
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    this.state = {
      client: this.props.client,
      takeBackRequestSendShowHide: false,
      friendRequestSent: false,
      receiveFriendRequestShowHide: false,
      boardConfiguration: boardConfiguration,
      prevBoardConfiguration: boardConfiguration,
      previousBlackPgn: [],
      previousWhitePiecesTakenDown: [],
      game: new jsChess.Game(boardConfiguration),
      paired: false,
      chatMessages: [],
      blackPgn: [],
      whitePgn: [],
      whitePiecesTakenDown: [],
      blackPiecesTakenDown: [],

      whitePlayerName: "Random",
      whitePlayerId: "",
      blackPlayerName: `${
        this.props.userData.userName ? this.props.userData.userName : "Random"
      }`,
    };
  }

  componentDidMount = async () => {
    // const client = new W3CWebSocket(
    //   `${process.env.REACT_APP_WEBSOCKET}?pieceColour=black&timer=${
    //     this.props.match.params.timer
    //   }&token=${localStorage.getItem("userToken")}`
    // );

    if (this.props.location.pathname.includes("random")) {
      this.state.client.send(
        JSON.stringify({
          type: "startRandomPlayerGame",
          body: {
            pieceColour: "black",
            timer: this.props.match.params.timer,
          },
        })
      );
    }

    this.state.client.onmessage = async (message) => {
      // console.log(message);
      const data = await JSON.parse(message.data);

      if (data.type === "whitePieceMoved") {
        // console.log("in black game");
        // console.log(data);
        this.renderWhiteBestMove(data.body);
      }
      if (data.type === "paired") {
        console.log(data.whitePlayerId);
        this.setState({
          paired: true,
          whitePlayerName: data.whiteUserName,
          whitePlayerId: data.whitePlayerId,
        });
        // console.log(data.message);
      }
      if (data.type === "friendRequestToBlack") {
        this.setState({ receiveFriendRequestShowHide: true });
        // console.log(data.message);
      }
      if (data.type === "opponentDisConnected") {
        alert(data.message);
        this.props.history.goBack();
      }
      if (data.type === "incomingChatMessage") {
        this.handleReceivedMessage(data.body);
      }
      if (data.type === "whiteTakeBackRequest") {
        this.handleWhiteTakeBackRequest();
      }
      if (data.type === "whiteTakeBack") {
        this.handleWhiteTakeBack(data.body);
      }
      if (data.type == "takeBackApprovalFromWhite") {
        // console.log("take back approved from white");
        this.handleTakeBackApproval();
      }
    };
  };

  addFriend = async () => {
    // console.log("Button clicked...");
    if (this.state.friendRequestSent !== true) {
      const { data } = await friendRequestService.sendFriendRequest("user", {
        receiverUserId: this.state.whitePlayerId,
      });
      this.setState({ friendRequestSent: true });
    }
    // console.log(this.state);
  };

  rejectFriendRequest = () => {
    this.setState({ receiveFriendRequestShowHide: false });

    friendRequestService.rejectFriendRequest("user", {
      sender: this.state.whitePlayerId,
    });
  };
  acceptFriendRequest = () => {
    this.setState({ receiveFriendRequestShowHide: false });

    friendRequestService.acceptFriendRequest("user", {
      sender: this.state.whitePlayerId,
    });
  };

  takeBackRequestRejectShowHide = () => {
    this.setState({
      takeBackRequestSendShowHide: !this.state.takeBackRequestSendShowHide,
    });

    // console.log(this.state);
  };
  takeBackRequestAcceptShowHide = () => {
    this.setState({
      takeBackRequestSendShowHide: !this.state.takeBackRequestSendShowHide,
    });
    // console.log("white take back request accepted");
    this.state.client.send(
      JSON.stringify({
        type: "takeBackApprovalFromBlack",
      })
    );
  };

  handleWhiteTakeBackRequest = async () => {
    // console.log("white sent take back request to black");
    this.setState({ takeBackRequestSendShowHide: true });
  };
  handleWhiteTakeBack = async (body) => {
    // console.log(body);
    try {
      const game = this.state.game;
      await this.setState({
        game: new jsChess.Game(body.fen),
        boardConfiguration: body.fen,
        whitePgn: body.whitePgn,
        blackPiecesTakenDown: body.blackPiecesTakenDown,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentWillUnmount = async () => {
    console.log("in component will unmount");
    this.state.client.send(
      JSON.stringify({
        type: "randomPlayerLeftTheGame",
      })
    );
  };

  handleReceivedMessage = (data) => {
    // console.log(data);
    const message = { incoming: true, message: data.message };
    const chatMessages = [...this.state.chatMessages];
    chatMessages.push(message);
    this.setState({ chatMessages });
  };

  sendMessage = (message) => {
    this.state.client.send(
      JSON.stringify({
        type: "chatMessage",
        body: {
          message: message,
        },
      })
    );
    const chatMessages = [...this.state.chatMessages];
    chatMessages.push({ incoming: false, message: message });
    this.setState({ chatMessages });
  };
  parseBestMove = async (string) => {
    string = await string.toUpperCase();
    return { from: `${string[0]}${string[1]}`, to: `${string[2]}${string[3]}` };
  };

  moveWhite = async () => {
    this.state.client.send(
      JSON.stringify({
        type: "blackPieceMoved",
        body: {
          fen: this.state.boardConfiguration,
          depth: 1,
          blackPgn: this.state.blackPgn,
          whitePiecesTakenDown: this.state.whitePiecesTakenDown,
        },
      })
    );
  };

  renderWhiteBestMove = async (body) => {
    try {
      const game = this.state.game;
      // console.log("incoming body");
      // console.log(body);
      await this.setState({
        game: new jsChess.Game(body.fen),
        boardConfiguration: body.fen,
        whitePgn: body.whitePgn,
        blackPiecesTakenDown: body.blackPiecesTakenDown,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleSendingTakeBackRequest = () => {
    // console.log("black sent take back to white");
    this.state.client.send(
      JSON.stringify({
        type: "blackTakeBackRequest",
      })
    );
  };

  handleTakeBackApproval = async () => {
    // console.log(this.state);
    await this.setState({
      boardConfiguration: this.state.prevBoardConfiguration,
      game: new jsChess.Game(this.state.prevBoardConfiguration),
      blackPgn: this.state.previousBlackPgn,
      whitePiecesTakenDown: this.state.previousWhitePiecesTakenDown,
    });
    // console.log(this.state);
    this.state.client.send(
      JSON.stringify({
        type: "blackTakeBack",
        body: {
          fen: this.state.prevBoardConfiguration,
          depth: 1,
          blackPgn: this.state.blackPgn,
          whitePiecesTakenDown: this.state.previousWhitePiecesTakenDown,
        },
      })
    );
  };

  findPieceClassName = async (piece) => {
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

  findIfwhitePieceTakenDown = async (configurationBeforeMove, blackPgnMove) => {
    const pieceTakenDown = await findPieceTakenDown(
      configurationBeforeMove,
      blackPgnMove
    );
    // console.log("white piece taken down");
    // console.log(pieceTakenDown);
    if (pieceTakenDown) {
      const whitePiecesTakenDown = [...this.state.whitePiecesTakenDown];
      const previousWhitePiecesTakenDown = [...this.state.whitePiecesTakenDown];
      await this.setState({ previousWhitePiecesTakenDown });
      const className = await this.findPieceClassName(pieceTakenDown);
      await whitePiecesTakenDown.push({ piece: className });
      await this.setState({ whitePiecesTakenDown });
    }
  };

  addMoveToBlackPgn = async (
    configurationBeforeMove,
    configurationAfterMove,
    from,
    to
  ) => {
    const blackPgnMove = await moveToPgnServices.getPgnForParticularMove(
      configurationBeforeMove,
      configurationAfterMove,
      from,
      to
    );
    await this.findIfwhitePieceTakenDown(configurationBeforeMove, blackPgnMove);
    const blackPgn = [...this.state.blackPgn];
    const previousBlackPgn = [...this.state.blackPgn];
    await this.setState({
      previousBlackPgn: previousBlackPgn,
    });
    await blackPgn.push(blackPgnMove);
    await this.setState({
      blackPgn: blackPgn,
    });
  };

  renderBlackMove = async (from, to) => {
    const prevBoardConfiguration = this.state.boardConfiguration;
    const jsonBoardConfiguration = new jsChess.status(
      this.state.boardConfiguration
    );
    if (jsonBoardConfiguration.turn === "black") {
      try {
        const boardConfiguration = jsChess.move(
          this.state.boardConfiguration,
          from,
          to
        );
        await this.addMoveToBlackPgn(
          this.state.boardConfiguration,
          boardConfiguration,
          from,
          to
        );
        // console.log(this.state.game.move(from, to));
        await this.setState({
          prevBoardConfiguration: prevBoardConfiguration,
          boardConfiguration: boardConfiguration,
          game: new jsChess.Game(boardConfiguration),
        });
      } catch (error) {
        // console.log(error);
        await this.setState({
          boardConfiguration: prevBoardConfiguration,
          game: new jsChess.Game(prevBoardConfiguration),
        });
      }
    }
  };

  renderPvPchessBoard = () => {
    if (this.state.paired) {
      return (
        <div className="content-grid player-game-part random-games">
          <div className="grid-column mt-4">
            <div className="row">
              <div className="col-md-2">
                <div className="sidebar-box">
                  <div className="heading-part">
                    <h3>Player With</h3>
                  </div>
                  <div className="action-buttons">
                    <ul>
                      <li>
                        <button className="btn-primary-btn active">
                          Random
                        </button>
                      </li>
                      <li>
                        <button className="btn-primary-btn">Comp</button>
                      </li>
                      <li>
                        <button className="btn-primary-btn">Add friend</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-box">
                  <div className="heading-part">
                    <h3>Game Mode</h3>
                  </div>
                  <div className="action-buttons">
                    <ul>
                      <li>
                        <button
                          className={`btn-primary-btn ${
                            this.props.match.params.timer == "5" ? "active" : ""
                          }`}
                        >
                          5 Minute
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn-primary-btn ${
                            this.props.match.params.timer == "10"
                              ? "active"
                              : ""
                          }`}
                        >
                          10 Minute
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn-primary-btn ${
                            this.props.match.params.timer == "15"
                              ? "active"
                              : ""
                          }`}
                        >
                          15 Minute
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn-primary-btn ${
                            !this.props.match.params.timer ? "active" : ""
                          }`}
                        >
                          Unlimited
                        </button>
                      </li>
                    </ul>
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
                                      src="/common/img/users/Image_13.png"
                                      alt="User Image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="user-status-text small">Player 1</p>
                            <p className="user-status-title medium">
                              <Link className="bold" to="/">
                                {this.state.blackPlayerName}
                              </Link>
                            </p>
                          </div>
                          {this.props.match.params.timer ? (
                            <GameTimer timer={this.props.match.params.timer} />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="game-board-part">
                          <div className="board-back">
                            <img
                              src="/common/img/icons/chess_board.png"
                              alt="Chess Board Image"
                            />
                          </div>
                          <PvpChessBoardBlack
                            boardConfiguration={this.state.boardConfiguration}
                            moveBlackFromTo={(from, to) =>
                              this.renderBlackMove(from, to)
                            }
                            moveWhite={this.moveWhite}
                          />
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
                            <p className="user-status-text small">Player 2</p>
                            <p className="user-status-title medium">
                              <Link className="bold" to="/">
                                {this.state.whitePlayerName}
                              </Link>
                            </p>
                          </div>
                          {this.props.match.params.timer ? (
                            <GameTimer timer={this.props.match.params.timer} />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="player-right-side">
                        <div className="top-option-button">
                          <ul>
                            <li>
                              <button
                                className="btn primary-btn"
                                onClick={this.handleSendingTakeBackRequest}
                                disabled={
                                  this.state.game.board.configuration.turn ===
                                  "black"
                                }
                              >
                                Take Back
                              </button>
                            </li>
                            <li>
                              <button className="btn primary-btn">Draw</button>
                            </li>
                            <li>
                              <button className="btn primary-btn">
                                Rematch
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn primary-btn"
                                onClick={this.addFriend}
                              >
                                {this.state.friendRequestSent
                                  ? "Request Sent"
                                  : "Add Friend"}
                              </button>
                            </li>
                            <TakeBackRequestModal
                              takeBackRequestSendShowHide={
                                this.state.takeBackRequestSendShowHide
                              }
                              takeBackRequestRejectShowHide={() =>
                                this.takeBackRequestRejectShowHide()
                              }
                              takeBackRequestAcceptShowHide={() =>
                                this.takeBackRequestAcceptShowHide()
                              }
                              playerName={this.state.whitePlayerName}
                            />
                            <AddFriendSendRequestModal
                              receiveFriendRequestShowHide={
                                this.state.receiveFriendRequestShowHide
                              }
                              rejectFriendRequest={() =>
                                this.rejectFriendRequest()
                              }
                              acceptFriendRequest={() =>
                                this.acceptFriendRequest()
                              }
                              playerName={this.state.whitePlayerName}
                            />
                          </ul>
                        </div>
                        <PiecesTakenDown
                          piecesDown={this.state.whitePiecesTakenDown}
                          whiteSide={true}
                        />
                        <div className="chat-moves">
                          <PvpChatBox
                            chatMessages={this.state.chatMessages}
                            sendMessage={(message) => this.sendMessage(message)}
                          />
                          <div className="moves-parts">
                            <PgnDisplay
                              blackPgn={this.state.blackPgn}
                              whitePgn={this.state.whitePgn}
                            ></PgnDisplay>
                          </div>
                        </div>
                        <PiecesTakenDown
                          piecesDown={this.state.blackPiecesTakenDown}
                          whiteSide={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="content-grid loader-game-part">
          <div className="mains-section">
            <div className="row">
              <div className="col-md-3">
                <div className="user-part">
                  <img src="/common/img/users/Image_17.png" alt="User Icon" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="loader-part">
                  <img
                    src="/common/img/icons/pageloader.gif"
                    alt="Page Loader"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="user-part">
                  <img src="/common/img/users/Image_15.png" alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="user-part">
                  <h3>Find Your Friends</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };

  render() {
    return this.renderPvPchessBoard();
  }
}

export default BlackPlayerVsPlayerGamePage;
