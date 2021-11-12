import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import BotChessBoard from "../botGameComponents/botChessBoard";
import { getBestMove } from "../services/gameServices";
import * as puzzleService from "../services/puzzleService";
import * as moveToPgnServices from "../services/moveToPgnServices";
import * as pgnToMoveServices from "../services/pgnToMoveService";
import PgnDisplay from "./pgnDisplay";
import SolutionChessBoard from "./solutionChessBoard";
const jsChess = require("js-chess-engine");
const { aiMove } = require("js-chess-engine");
class PuzzleGamePage extends Component {
  constructor(props) {
    super(props);
    let boardConfiguration =
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    this.state = {
      solution: false,
      boardConfiguration: boardConfiguration,
      game: new jsChess.Game(boardConfiguration),
    };
  }

  componentDidMount = async () => {
    let stake;
    if (await this.props.match.path.includes("/guest")) stake = "guest";
    if (await this.props.match.path.includes("/user")) stake = "user";
    if (await this.props.match.path.includes("/coach")) stake = "coach";
    const { data } = await puzzleService.getPuzzle(stake);
    await this.setState({
      puzzleInitialState: data,
      boardConfiguration: data.puzzleFen,
      game: new jsChess.Game(data.puzzleFen),
      moves: data.optimumMoves,
      maximumMoves: data.maximumMoves,
      result: data.result,
      movesTaken: 0,

      blackPgn: data.puzzleBlackPgn,
      solutionBlackPgn: data.solutionBlackPgn,
      whitePgn: data.puzzleWhitePgn,
      solutionWhitePgn: data.solutionWhitePgn,
      puzzleTitle: data.puzzleTitle,
    });
  };

  checkIfMovesFinished = () => {
    if (this.state.moves == this.state.movesTaken) {
      alert("optimum moves finished");
    }
    if (this.state.maximumMoves == this.state.movesTaken) {
      alert("maximum moves finished");
      this.retryPuzzle();
    }
  };

  checkIfTargetAchieved = async () => {
    const game = await this.state.game.exportJson();

    if (this.state.result == 1 && game && game.check === true) {
      alert("target achieved");
      return true;
    }
    if (this.state.result == 2 && game && game.checkMate === true) {
      alert("target achieved");
      return true;
    }
    if (
      this.state.result == 3 &&
      game &&
      game.checkMate === false &&
      game.isFinished === true
    ) {
      alert("target achieved");
      return true;
    }
    return false;
  };

  parseBestMove = async (string) => {
    string = await string.toUpperCase();
    return { from: `${string[0]}${string[1]}`, to: `${string[2]}${string[3]}` };
  };
  moveBlackSolution = async () => {
    const blackPgnIndex =
      this.state.blackPgn.length + this.state.movesTaken - 1;
    if (!this.state.solutionBlackPgn[blackPgnIndex]) {
      return false;
    }
    const move = await pgnToMoveServices.getMoveForParticularPgn(
      this.state.boardConfiguration,
      this.state.solutionBlackPgn[blackPgnIndex]
    );
    const game = this.state.game;
    try {
      await game.move(move.from, move.to);
    } catch (error) {
      return false;
    }
    const blackPgnMove = await moveToPgnServices.getPgnForParticularMove(
      this.state.boardConfiguration,
      game.exportFEN(),
      move.from,
      move.to
    );
    const blackPgn = [...this.state.blackPgn];
    await blackPgn.push(blackPgnMove);
    await this.setState({
      game: game,
      boardConfiguration: game.exportFEN(),
      blackPgn: blackPgn,
    });
    return true;
  };
  moveBlack = async () => {
    const game = await this.state.game.exportJson();

    if (await this.moveBlackSolution()) return;

    if (game.turn === "white") return;
    else {
      try {
        const bestMove = await getBestMove("user", {
          fen: this.state.boardConfiguration,
          depth: 1,
        });

        const { from, to } = await this.parseBestMove(bestMove);

        const game = this.state.game;
        await game.move(from, to);
        const blackPgnMove = await moveToPgnServices.getPgnForParticularMove(
          this.state.boardConfiguration,
          game.exportFEN(),
          from,
          to
        );
        const blackPgn = [...this.state.blackPgn];
        await blackPgn.push(blackPgnMove);
        await this.setState({
          game: game,
          boardConfiguration: game.exportFEN(),
          blackPgn: blackPgn,
        });
      } catch (error) {
        if (this.state.game.exportJson().turn === "black") {
          const game = this.state.game;
          const aiMove = jsChess.aiMove(this.state.boardConfiguration, 3);
          let from;
          for (let key in aiMove) {
            from = key;
          }
          let to = aiMove[from];
          game.move(from, to);
          const blackPgnMove = await moveToPgnServices.getPgnForParticularMove(
            this.state.boardConfiguration,
            game.exportFEN(),
            from,
            to
          );
          const blackPgn = [...this.state.blackPgn];
          await blackPgn.push(blackPgnMove);
          await this.setState({
            game: game,
            boardConfiguration: game.exportFEN(),
            blackPgn: blackPgn,
          });
          await this.setState({
            game: game,
            boardConfiguration: game.exportFEN(),
          });
        }
      }
    }
  };
  renderWhiteMove = async (from, to) => {
    const prevBoardConfiguration = this.state.boardConfiguration;
    const game = await this.state.game.exportJson();
    if (game.turn === "black") return;
    else {
      try {
        const boardConfiguration = jsChess.move(
          this.state.boardConfiguration,
          from,
          to
        );
        const whitePgnMove = await moveToPgnServices.getPgnForParticularMove(
          this.state.boardConfiguration,
          boardConfiguration,
          from,
          to
        );
        const whitePgn = [...this.state.whitePgn];
        await whitePgn.push(whitePgnMove);
        await this.setState({
          boardConfiguration: boardConfiguration,
          game: new jsChess.Game(boardConfiguration),
          movesTaken: this.state.movesTaken + 1,
          whitePgn: whitePgn,
        });
        setTimeout(async () => {
          const targetAchieved = await this.checkIfTargetAchieved();
          if (targetAchieved) {
            this.getNextPuzzle();
          } else {
            setTimeout(() => {
              this.checkIfMovesFinished();
            }, 750);
          }
        }, 300);
      } catch (error) {
        await this.setState({
          boardConfiguration: prevBoardConfiguration,
          game: new jsChess.Game(prevBoardConfiguration),
        });
      }
    }
  };
  getSolution = async () => {
    const { puzzleInitialState } = this.state;
    const initialBlackPgn = [...this.state.puzzleInitialState.puzzleBlackPgn];
    const initialWhitePgn = [...this.state.puzzleInitialState.puzzleWhitePgn];

    await this.setState({
      boardConfiguration: puzzleInitialState.puzzleFen,
      game: new jsChess.Game(puzzleInitialState.puzzleFen),
      moves: puzzleInitialState.optimumMoves,
      maximumMoves: puzzleInitialState.maximumMoves,
      result: puzzleInitialState.result,
      movesTaken: 0,
      whitePgn: initialWhitePgn,
      blackPgn: initialBlackPgn,
      solution: true,
    });
  };
  getNextPuzzle = async () => {
    let stake;
    if (await this.props.match.path.includes("/guest")) stake = "guest";
    if (await this.props.match.path.includes("/user")) stake = "user";
    if (await this.props.match.path.includes("/coach")) stake = "coach";
    const { data } = await puzzleService.getPuzzle(stake);
    await this.setState({
      puzzleInitialState: data,
      boardConfiguration: data.puzzleFen,
      game: new jsChess.Game(data.puzzleFen),
      moves: data.optimumMoves,
      result: data.result,
      movesTaken: 0,
      maximumMoves: data.maximumMoves,
      blackPgn: data.puzzleBlackPgn,
      solutionBlackPgn: data.solutionBlackPgn,
      whitePgn: data.puzzleWhitePgn,
      solutionWhitePgn: data.solutionWhitePgn,
      puzzleTitle: data.puzzleTitle,
      solution: false,
    });
  };
  retryPuzzle = async () => {
    let stake;
    if (await this.props.match.path.includes("/guest")) stake = "guest";
    if (await this.props.match.path.includes("/user")) stake = "user";
    if (await this.props.match.path.includes("/coach")) stake = "coach";
    const { puzzleInitialState } = this.state;
    const initialBlackPgn = [...this.state.puzzleInitialState.puzzleBlackPgn];
    const initialWhitePgn = [...this.state.puzzleInitialState.puzzleWhitePgn];

    this.setState({
      boardConfiguration: puzzleInitialState.puzzleFen,
      game: new jsChess.Game(puzzleInitialState.puzzleFen),
      moves: puzzleInitialState.optimumMoves,
      result: puzzleInitialState.result,
      movesTaken: 0,
      whitePgn: initialWhitePgn,
      blackPgn: initialBlackPgn,
      solution: false,
    });
  };
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  returnTarget = () => {
    if (this.state.result == 1) {
      return "Check";
    } else if (this.state.result == 2) {
      return "CheckMate";
    } else return "Draw";
  };
  render() {
    return (
      <div className="content-grid game-part">
        <Modal show={this.state.showHide}>
          <Modal.Body>
            <div className="react-modal-deaign">
              <img
                src="/common/img/icons/leader_board.png"
                alt="pieces Image"
              />
              <h4>Optimum moves finished</h4>
              <div className="action-btm">
                <Button
                  variant="secondary"
                  onClick={() => this.handleModalShowHide()}
                >
                  ok
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar-box">
                <div className="heading-part">
                  <h3>Puzzle Rating : 1568</h3>
                </div>
                <div className="action-buttons">
                  <ul>
                    <li>
                      <button
                        className="btn-primary-btn"
                        onClick={this.getSolution}
                      >
                        Solution
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-primary-btn"
                        onClick={this.retryPuzzle}
                      >
                        Retry
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-primary-btn"
                        onClick={this.getNextPuzzle}
                      >
                        Next Puzzle
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-box mt-3 puzzle-details">
                <div className="heading-part">
                  <h3>Puzzle Details</h3>
                </div>
                <div class="sidebar-box-items">
                  <div class="totals-line-list ">
                    <div class="totals-line">
                      <p class="totals-line-title">Moves taken</p>
                      <p class="price-title">{this.state.movesTaken}</p>
                    </div>
                    <div class="totals-line">
                      <p class="totals-line-title">Optimum moves</p>
                      <p class="price-title">{this.state.moves}</p>
                    </div>
                    <div class="totals-line">
                      <p class="totals-line-title">Maximun moves</p>
                      <p class="price-title">{this.state.maximumMoves}</p>
                    </div>
                    <div class="totals-line">
                      <p class="totals-line-title">Target</p>
                      <p class="price-title">
                        {this.state.result ? this.returnTarget() : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="sidebar-box">
                <div className="puzzle-title">
                  <h3>
                    {`${this.state.puzzleTitle ? this.state.puzzleTitle : ""}`}
                    {`${this.state.solution ? " Solution" : ""}`}
                  </h3>
                </div>
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
                                    src="/common/img/users/Image_13.png"
                                    alt="User Image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="user-status-text small">Player 1</p>
                          <p className="user-status-title medium">
                            <Link className="bold">Computer</Link>
                          </p>
                        </div>
                        <div className="game-time">
                          <ul>
                            <li>
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
                        {this.state.solution ? (
                          <SolutionChessBoard
                            boardConfiguration={this.state.boardConfiguration}
                            whitePgn={this.state.solutionWhitePgn}
                            blackPgn={this.state.solutionBlackPgn}
                            moveWhiteFromTo={(from, to) =>
                              this.renderWhiteMove(from, to)
                            }
                            whiteSolutionPgnIndex={this.state.whitePgn.length}
                            moveBlack={this.moveBlack}
                          />
                        ) : (
                          <BotChessBoard
                            boardConfiguration={this.state.boardConfiguration}
                            moveWhiteFromTo={(from, to) =>
                              this.renderWhiteMove(from, to)
                            }
                            moveBlack={this.moveBlack}
                          />
                        )}
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
                              Alex Smith
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
                    <PgnDisplay
                      blackPgn={this.state.blackPgn}
                      whitePgn={this.state.whitePgn}
                    ></PgnDisplay>
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

export default PuzzleGamePage;
