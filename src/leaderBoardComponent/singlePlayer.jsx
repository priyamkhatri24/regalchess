import React, { Component } from "react";
import { Link } from "react-router-dom";
class SinglePlayer extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="tabsviewuserside">
          <ul>
            <li><Link  className="active"  to="/user/single-player-leaderboard">Single Player</Link></li>
            <li><Link  to="/user/tournament-leaderboard">Tournament</Link></li>
          </ul>
        </div>
        <div className="grid-column coaching-part mt-4">
        <div className="search-form-part">
          <div className="main-section d-flex">
            <div className="select-part w-50 mr-2 ml-2">
              <div className="form-froup">
                <select className="form-control">
                  <option>School</option>
                  <option>Open</option>
                  <option>Club/Area</option>
                </select>
              </div>
            </div>
            <div className="select-part w-50 mr-2 ml-2">
              <div className="form-froup">
                <select className="form-control">
                  <option>Year</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="grid tournament-detail">
            <div className="user-preview landscape">
              <figure class="user-preview-cover liquid">
                <img src="/common/img/users/Image_13.png" alt="user" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <p className="user-short-description-title">Allina Smith</p>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">3rd</p>
                    <p className="user-stat-text">Position</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">5000</p>
                    <p className="user-stat-text">Rating</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">100 </p>
                    <p className="user-stat-text">Points</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-preview landscape ">
              <figure class="user-preview-cover liquid">
                <img src="/common/img/users/Image_13.png" alt="user" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <p className="user-short-description-title">Allina Smith</p>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">2nd</p>
                    <p className="user-stat-text">Position</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">5000</p>
                    <p className="user-stat-text">Rating</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">100 </p>
                    <p className="user-stat-text">Points</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-preview landscape ">
              <figure class="user-preview-cover liquid">
                <img src="/common/img/users/Image_13.png" alt="user" />
              </figure>
              <div className="user-preview-info">
                <div className="user-short-description landscape tiny">
                  <p className="user-short-description-title">Allina Smith</p>
                </div>
                <div className="user-stats">
                  <div className="user-stat">
                    <p className="user-stat-title">1st</p>
                    <p className="user-stat-text">Position</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">5000</p>
                    <p className="user-stat-text">Rating</p>
                  </div>
                  <div className="user-stat">
                    <p className="user-stat-title">100 </p>
                    <p className="user-stat-text">Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default SinglePlayer;
