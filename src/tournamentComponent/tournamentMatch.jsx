import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import * as FireworksCanvas from 'fireworks-canvas'
class TournamentMatch extends Component {
  state = {};
  winnerResultshowHide() {
    this.setState({ winnerResultshowHide: !this.state.winnerResultshowHide });
    console.log(this.state);
  }

  render() {
    return (
      <div className="content-grid player-game-part">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-3">
              <div className="upcomming-tournamnet">
                <div className="user-preview landscape feelobby">
                  <h4>Free Lobby</h4>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_16.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_15.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="upcomming-tournamnet feelobby">
                <div className="user-preview landscape tournamnet-game-leftpart">
                  <h4>Free Lobby</h4>
                  <div className="tablepart">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>Player</th>
                          <th>Rating</th>
                          <th>Point</th>
                          <th>School</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td><img src="/common/img/users/Image_17.png" alt="User Image" /><span><img src="/common/img/icons/batch1.png" alt="Batch" /></span></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td><img src="/common/img/users/Image_16.png" alt="User Image" /><span><img src="/common/img/icons/batch2.png" alt="Batch" /></span></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td><img src="/common/img/users/Image_15.png" alt="User Image" /><span><img src="/common/img/icons/batch3.png" alt="Batch" /></span></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                        <tr>
                          <td>04</td>
                          <td><img src="/common/img/users/Image_17.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                        <tr>
                          <td>05</td>
                          <td><img src="/common/img/users/Image_15.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                        <tr>
                          <td>06</td>
                          <td><img src="/common/img/users/Image_16.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                        <tr>
                          <td>07</td>
                          <td><img src="/common/img/users/Image_15.png" alt="User Image" /></td>
                          <td>1500</td>
                          <td>40</td>
                          <td><img src="/common/img/coach/school2.png" alt="School Image" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="upcomming-tournamnet gameroom-tournament">
                <div className="user-preview landscape feelobby">
                  <h4>Ongoing Match</h4>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  teamvs tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">Jonny William</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                    </div>
                    <div className="user-preview-actions">
                      <div className="achievment-link">
                        <Link to="/user/tournament-game-room-play">Watch</Link>
                      </div>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  teamvs tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                    </div>
                    <div className="user-preview-actions">
                      <div className="achievment-link">
                        <Link to="/user/tournament-game-room-play">Watch</Link>
                      </div>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  teamvs tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                    </div>
                    <div className="user-preview-actions">
                      <div className="achievment-link">
                        <Link to="/user/tournament-game-room-play">Watch</Link>
                      </div>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  teamvs tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                    </div>
                    <div className="user-preview-actions">
                      <div className="achievment-link">
                        <Link to="/user/tournament-game-room-play">Watch</Link>
                      </div>
                    </div>
                  </div>
                  <div className="user-preview-info">
                    <div className="user-short-description landscape  teamvs tiny padd-left-50">
                      <figure class="user-preview-cover liquid firstteam">
                        <img src="/common/img/users/Image_13.png" alt="User Image" />
                      </figure>
                      <p className="user-short-description-title">Jonny William</p>
                      <p className="user-short-description-text">Player 1</p>
                    </div>
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                    </div>
                    <div className="user-preview-actions">
                      <div className="achievment-link">
                        <Link onClick={() => this.winnerResultshowHide()}>Watch</Link>
                      </div>
                    </div>
                  </div>
                  <Modal
                    show={this.state.winnerResultshowHide}
                    className="winneresult-modal"
                  >
                    <button onClick={() => this.winnerResultshowHide()} className="closebutton">
                      <i className="fa fa-times"></i>
                    </button>
                    <Modal.Body>
                      <div className="main-section">
                        <div className="modal-cards">
                          <h2 className="tournament-heading">Tournament Winner</h2>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="top-heading text-center mt-4">
                                <img
                                  src="/common/img/users/Image_16.png"
                                  alt="User Image" className="userinage"
                                />
                                <h3>Mo Danish </h3>
                                <p>
                                  Winnner 2
                                </p>
                                <img
                                  src="/common/img/icons/trophy2.png"
                                  alt="Winner 2" className="winner"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="top-heading text-center">
                                <img
                                  src="/common/img/users/Image_17.png"
                                  alt="User Image" className="userinage"
                                />
                                <h3>Mo Danish </h3>
                                <p>
                                  Winnner 1
                                </p>
                                <img
                                  src="/common/img/icons/trophy1.png"
                                  alt="Winner 1" className="winner"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="top-heading text-center mt-4">
                                <img
                                  src="/common/img/users/Image_15.png"
                                  alt="User Image" className="userinage"
                                />
                                <h3>Mo Danish </h3>
                                <p>
                                  Winnner 3
                                </p>
                                <img
                                  src="/common/img/icons/trophy3.png"
                                  alt="Winner3" className="winner"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="gotoboard text-center">
                            <Link to="/user/tournament-result">Go to Result Page</Link>
                          </div>
                          <div class="pyro">
                            <div class="before"></div>
                            <div class="after"></div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TournamentMatch;
