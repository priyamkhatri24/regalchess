import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import * as complainService from "../services/complainServices";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class SchoolTournamentDetail extends Form {
  state = {}
  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Tournament</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="vip-video-details">
              <div className="grid centered">
                <div className="upcomming-tournamnet">
                  <div className="user-preview landscape">
                    <div className="user-preview-info">
                      <div className="user-short-description landscape teamvs  tiny padd-left-50">
                        <figure class="user-preview-cover liquid firstteam">
                          <img src="/common/img/icons/img1.png" alt="School Logo" />
                        </figure>
                        <p className="user-short-description-title ct">Tom Cruise</p>
                        <p className="user-short-description-text">Area Code-0512</p>
                      </div>
                      <div className="user-short-description landscape  tiny padd-right-50">
                        <p className="user-short-description-title text-right ct">Henry Cavill

</p>
                        <p className="user-short-description-text text-right">Area Code-0520</p>
                        <figure class="user-preview-cover liquid secondteam">
                          <img src="/common/img/icons/img6.png" alt="School Logo" />
                        </figure>
                      </div>
                      <div className="user-stats">
                        <div className="user-stat">
                          <p className="user-stat-title">1500-1800</p>
                          <p className="user-stat-text">Score</p>
                        </div>
                        <div className="user-stat">
                          <p className="user-stat-title">28-03-2021 </p>
                          <p className="user-stat-text">Date</p>
                        </div>
                        <div className="user-stat">
                          <p className="user-stat-title">03:00 PM </p>
                          <p className="user-stat-text">Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-description">
                <div className="d-flex justify-content-between"> 
                <h3 className="text-center">Description/Rules</h3>
                <div className="text-center" style={{marginTop:"-30px"}}><Link to="/user/tournament-game-room-play">Pay & Play</Link></div>
                </div>
                <div className="school-registered justify-content-between mb-2">
                  <p className="video-fees mr-5">Player Registered in Team 1 : <span>20</span> </p>
                  <p className="video-fees pull-right" style={{marginLeft:"170px"}}>Player Registered in Team 2 : <span>20</span> </p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p><b>Note</b> Total no of player allowed 40</p>
                {/* <div className="school-registered justify-content-between">
                  <p className="video-fees mr-5">Player Registered in Team 1 : <span>20</span> </p>
                  <p className="video-fees pull-right" style={{marginLeft:"170px"}}>Player Registered in Team 2 : <span>20</span> </p>
                </div> */}
                <img  className="token-img mt-2"  style={{marginLeft:"43%", width:"80px"}} src="/common/img/coach/token.png" alt="School Logo" />
<div className="heading-part">
                          <h3 className="text-center mt-1">Pay 500 Token</h3>
                        </div>
                       
                {/* <div className="text-center" style={{marginTop:"-30px"}}><Link to="/user/tournament-game-room-play">Pay & Play</Link></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SchoolTournamentDetail;
