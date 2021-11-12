import React, { Component } from "react";
import { Link } from "react-router-dom";
class UserTournamentDetail extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid game-part">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-4">
              <div className="upcomming-tournamnet">
                <div className="user-preview landscape feelobby">
                  <h4>Join Player</h4>
                  <div className="user-preview landscape  tournamnet-border">
                    <div className="user-preview-info">
                      <div className="user-short-description landscape  teamvs tiny padd-left-50 tournament-detailcard">
                        <figure class="user-preview-cover liquid firstteam">
                          <img src="/common/img/coach/school1.png" alt="User Image" />
                        </figure>
                        <p className="user-short-description-title">Delhi Public School</p>
                        <p className="user-short-description-text">Area Code-0512</p>
                      </div>
                      <div className="user-short-description landscape  tiny padd-right-50 tournament-detailcard">
                        <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">Modal Public Schoo</p>
                        <p className="user-short-description-text text-right">Area Code-0520</p>
                        <figure class="user-preview-cover liquid secondteam">
                          <img src="/common/img/coach/school2.png" alt="User Image" />
                        </figure>
                      </div>
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
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">Jonny William</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
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
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
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
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
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
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
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
                    <div className="user-short-description landscape  tiny padd-right-50">
                      <p className="user-short-description-title text-right" title="Modal sdfgrf ghSchoo">John Smith</p>
                      <p className="user-short-description-text text-right">Player 2</p>
                      <figure class="user-preview-cover liquid secondteam">
                        <img src="/common/img/users/Image_17.png" alt="User Image" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="c session-tournament">
                <div className="">
                  <div className="widget-box">
                    <div className="session-part">
                      <video width="320" height="240" controls>
                        <source src="/common/img/video/chess.webm" type="video/mp4" />
                      </video>
                      <p className="videosession">Live Session by Coach</p>
                      <p className="starttournament"><Link to="/user/tournament-match">Time of  Tournament : 12:15 min</Link></p>
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

export default UserTournamentDetail;
