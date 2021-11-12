import React, { Component } from "react";
import { Link } from "react-router-dom";
const jsChess = require("js-chess-engine");

class TournamentTeamResult extends Component {
  render() {
    return (
      <div className="content-grid player-game-part">
        <div className="grid-column mt-4">
          <div className="top-content-part">
            <div className="row">
              <div className="col-md-4">
                <div className="team-detail pull-left">
                  <div className="image-part">
                    <img src="/common/img/coach/school1.png" alt="User Image" />
                  </div>
                  <div className="detail-part">
                    <div className="team-name">
                      <h4>G D Goenda Public School</h4>
                      <p>Area Code-0512</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="visrespart text-center">
                  <img src="/common/img/coach/vs_white.png" alt="VS" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-detail pull-right">
                  <div className="image-part">
                    <img src="/common/img/coach/school2.png" alt="User Image" />
                  </div>
                  <div className="detail-part">
                    <div className="team-name">
                      <h4>National Public School</h4>
                      <p>Area Code-0519</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tournament-result-section">
            <div className="row">
              <div className="col-md-4">
                <div className="main-section borderright">
                  <div className="tablepart">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Player</th>
                          <th>Rating</th>
                          <th>Point</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_13.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_16.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_15.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_16.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_17.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_13.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_17.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_13.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="result-parts text-center">
                <h2>Tournament Winner</h2>
                <img src="/common/img/coach/winner.png" alt="Winner Image" />
                <h3>Winner</h3>
                <h4>National International School</h4>
                <p>Area Code : 0564</p>
              </div>
              </div>
              <div className="col-md-4">
                <div className="main-section borderleft">
                  <div className="tablepart">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Player</th>
                          <th>Rating</th>
                          <th>Point</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_13.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_16.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_15.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_16.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_17.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_13.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_17.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="team-detail">
                              <div className="image-part">
                                <img src="/common/img/users/Image_13.png" alt="User Image" />
                              </div>
                              <div className="detail-part">
                                <div className="team-name">
                                  <p>Player 1</p>
                                  <h4>Alliana Smith</h4>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>1500</td>
                          <td>40</td>
                        </tr>
                      </tbody>
                    </table>
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

export default TournamentTeamResult;
