import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getBestMove } from "../services/gameServices";

import PvpChatBox from "../commonComponents/pvpChatBox";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import CoachLogin from "../loginregistrationComponents/coachLogin";
import * as moveToPgnServices from "../services/moveToPgnServices";
import * as friendRequestService from "../services/friendRequestService";
import PgnDisplay from "../puzzleComponent/pgnDisplay";
import { findPieceTakenDown } from "../services/registerationServices/findPiecesTakenDown";
import PiecesTakenDown from "../commonComponents/piecesTakenDown";
import PvpChessBoardWhite from "./pvpChessBoardWhite";
import GameTimer from "../commonComponents/gameTimer";
import { Button, Modal } from "react-bootstrap";
import TakeBackRequestModal from "./takeBackRequestModal";
import AddFriendSendRequestModal from "./addFriendSendRequestModal";

const jsChess = require("js-chess-engine");

class WhitePlayerVsPlayerGamePage extends Component {
  constructor(props) {
    super(props);
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
      previousWhitePgn: [],
      previousBlackPiecesTakenDown: [],
      game: new jsChess.Game(boardConfiguration),
      paired: false,
      chatMessages: [],
      whitePgn: [],
      blackPgn: [],
      whitePiecesTakenDown: [],
      blackPiecesTakenDown: [],
      buttonText: "Add Friend",
      whitePlayerName: `${
        this.props.userData.userName ? this.props.userData.userName : "Random"
      }`,
      blackPlayerName: "Random",
      blackPlayerId: "",
    };
  }
  addFriend = async () => {
    // console.log("Button clicked...");
    if (this.state.friendRequestSent !== true) {
      const { data } = await friendRequestService.sendFriendRequest("user", {
        receiverUserId: this.state.blackPlayerId,
      });
      this.setState({ friendRequestSent: true });
    }
    // console.log(this.state);
  };
  rejectFriendRequest = () => {
    this.setState({ receiveFriendRequestShowHide: false });
    friendRequestService.rejectFriendRequest("user", {
      sender: this.state.blackPlayerId,
    });
  };
  acceptFriendRequest = () => {
    this.setState({ receiveFriendRequestShowHide: false });
    friendRequestService.acceptFriendRequest("user", {
      sender: this.state.blackPlayerId,
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
        type: "takeBackApprovalFromWhite",
      })
    );
  };
  componentDidMount = async () => {
    // const client = new W3CWebSocket(
    //   `${process.env.REACT_APP_WEBSOCKET}?pieceColour=white&timer=${
    //     this.props.match.params.timer
    //   }&token=${localStorage.getItem("userToken")}`
    // );

    // this.state.client.onopen = () => {
    //   // console.log("WebSocket Client Connected");
    //   this.state.client.send(
    //     JSON.stringify({
    //       token: localStorage.getItem("userToken"),
    //     })
    //   );
    // };
    if (this.props.location.pathname.includes("random")) {
      this.state.client.send(
        JSON.stringify({
          type: "startRandomPlayerGame",
          body: {
            pieceColour: "white",
            timer: this.props.match.params.timer,
          },
        })
      );
    }
    this.state.client.onmessage = async (message) => {
      // console.log(message);
      const data = await JSON.parse(message.data);
      // console.log(data.type);
      if (data.type === "paired") {
        this.setState({
          paired: true,
          blackPlayerName: data.blackUserName,
          blackPlayerId: data.blackPlayerId,
        });
        // console.log(data.message);
      }
      if (data.type === "friendRequestToWhite") {
        this.setState({ receiveFriendRequestShowHide: true });
        // console.log(data.message);
      }
      if (data.type === "blackPieceMoved") {
        // console.log("in white game");
        // console.log(data);
        this.renderBlackBestMove(data.body);
      }
      if (data.type === "opponentDisConnected") {
        alert(data.message);
        this.props.history.goBack();
      }
      if (data.type === "incomingChatMessage") {
        this.handleReceivedMessage(data.body);
      }
      if (data.type === "blackTakeBackRequest") {
        this.handleBlackTakeBackRequest();
      }
      if (data.type === "blackTakeBack") {
        this.handleBlackTakeBack(data.body);
      }
      if (data.type == "takeBackApprovalFromBlack") {
        // console.log("take back approved from black");
        this.handleTakeBackApproval();
      }
    };
  };
  componentWillUnmount = async () => {
    console.log("in component will unmount");
    this.state.client.send(
      JSON.stringify({
        type: "randomPlayerLeftTheGame",
      })
    );
  };

  handleSendingTakeBackRequest = () => {
    // console.log("white is sending take back request to black");
    this.state.client.send(
      JSON.stringify({
        type: "whiteTakeBackRequest",
      })
    );
  };

  handleTakeBackApproval = async () => {
    // console.log("in white take back");
    // console.log(this.state);
    await this.setState({
      boardConfiguration: this.state.prevBoardConfiguration,
      game: new jsChess.Game(this.state.prevBoardConfiguration),
      whitePgn: this.state.previousWhitePgn,
      blackPiecesTakenDown: this.state.previousBlackPiecesTakenDown,
    });
    // console.log(this.state);
    this.state.client.send(
      JSON.stringify({
        type: "whiteTakeBack",
        body: {
          fen: this.state.prevBoardConfiguration,
          depth: 1,
          whitePgn: this.state.previousWhitePgn,
          blackPiecesTakenDown: this.state.previousBlackPiecesTakenDown,
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

  handleReceivedMessage = (data) => {
    // console.log(data);
    const message = { incoming: true, message: data.message };
    const chatMessages = [...this.state.chatMessages];
    chatMessages.push(message);
    this.setState({ chatMessages });
  };

  sendMessage = (message) => {
    // console.log(message);
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

  moveBlack = async () => {
    this.state.client.send(
      JSON.stringify({
        type: "whitePieceMoved",
        body: {
          fen: this.state.boardConfiguration,
          depth: 1,
          whitePgn: this.state.whitePgn,
          blackPiecesTakenDown: this.state.blackPiecesTakenDown,
        },
      })
    );
  };

  handleBlackTakeBackRequest = async () => {
    // console.log("white got take back request from black");
    this.setState({ takeBackRequestSendShowHide: true });
  };
  handleBlackTakeBack = async (body) => {
    // console.log(body);
    try {
      const game = this.state.game;

      await this.setState({
        game: new jsChess.Game(body.fen),
        boardConfiguration: body.fen,
        blackPgn: body.blackPgn,
        whitePiecesTakenDown: body.whitePiecesTakenDown,
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderBlackBestMove = async (body) => {
    // console.log(body);
    try {
      const game = this.state.game;

      await this.setState({
        game: new jsChess.Game(body.fen),
        boardConfiguration: body.fen,
        blackPgn: body.blackPgn,
        whitePiecesTakenDown: body.whitePiecesTakenDown,
      });
    } catch (error) {
      console.log(error);
    }
  };

  findIfblackPieceTakenDown = async (configurationBeforeMove, pgnMove) => {
    {
      const pieceTakenDown = await findPieceTakenDown(
        configurationBeforeMove,
        pgnMove
      );
      // console.log("white piecet taken down");
      // console.log(pieceTakenDown);
      if (pieceTakenDown) {
        const blackPiecesTakenDown = [...this.state.blackPiecesTakenDown];
        const previousBlackPiecesTakenDown = [
          ...this.state.blackPiecesTakenDown,
        ];
        await this.setState({ previousBlackPiecesTakenDown });
        const className = await this.findPieceClassName(pieceTakenDown);
        await blackPiecesTakenDown.push({ piece: className });
        await this.setState({ blackPiecesTakenDown });
      }
    }
  };

  addMoveToWhitePgn = async (
    configurationBeforeMove,
    configurationAfterMove,
    from,
    to
  ) => {
    const whitePgnMove = await moveToPgnServices.getPgnForParticularMove(
      configurationBeforeMove,
      configurationAfterMove,
      from,
      to
    );
    await this.findIfblackPieceTakenDown(configurationBeforeMove, whitePgnMove);
    const whitePgn = [...this.state.whitePgn];
    const previousWhitePgn = [...this.state.whitePgn];
    await this.setState({
      previousWhitePgn: previousWhitePgn,
    });
    await whitePgn.push(whitePgnMove);
    await this.setState({
      whitePgn: whitePgn,
    });
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
        await this.addMoveToWhitePgn(
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
                          <PvpChessBoardWhite
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
                                  "white"
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
                              {this.props.location.pathname.includes(
                                "random"
                              ) ? (
                                <button
                                  className="btn primary-btn"
                                  onClick={this.addFriend}
                                >
                                  {this.state.friendRequestSent
                                    ? "Request Sent"
                                    : "Add Friend"}
                                </button>
                              ) : (
                                ""
                              )}
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
                              playerName={this.state.blackPlayerName}
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
                              playerName={this.state.blackPlayerName}
                            />
                          </ul>
                        </div>
                        <PiecesTakenDown
                          piecesDown={this.state.blackPiecesTakenDown}
                          whiteSide={false}
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
                          piecesDown={this.state.whitePiecesTakenDown}
                          whiteSide={true}
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

export default WhitePlayerVsPlayerGamePage;
