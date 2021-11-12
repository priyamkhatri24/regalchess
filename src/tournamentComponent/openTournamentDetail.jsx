import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import * as complainService from "../services/complainServices";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class OpenTournamentDetail extends Form {
  state = {}
  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Open Tournament</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="vip-video-details">
              <div className="grid centered">
                <div className="upcomming-tournamnet">
                  <div className="user-preview landscape">
                    <div className="user-preview-info">
                      <div className="user-short-description landscape teamvs  tiny padd-left-50">
                        <figure class="user-preview-cover liquid firstteam">
                          <img src="/common/img/coach/school1.png" alt="School Logo" />
                        </figure>
                        <p className="user-short-description-title">Royal Public Club</p>
                        <p className="user-short-description-text">Area Code-0512</p>
                      </div>
                      <div className="user-short-description landscape  tiny padd-right-50">
                        <p className="user-short-description-title text-right">Modal Public Club</p>
                        <p className="user-short-description-text text-right">Area Code-0520</p>
                        <figure class="user-preview-cover liquid secondteam">
                          <img src="/common/img/coach/school2.png" alt="School Logo" />
                        </figure>
                      </div>
                      <div className="user-stats">
                        <div className="user-stat">
                          <p className="user-stat-title">1500-1800</p>
                          <p className="user-stat-text">Recomendadtion Score</p>
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
                <h3 className="text-center">Description/Rules</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p><b>Note</b> Total no of player allowed 40</p>
                <div className="school-registered">
                  <p className="video-fees">Player Registered in Royal Public Club : <span>20</span> </p>
                  <p className="video-fees pull-right">Player Registered in GD Public club : <span>20</span> </p>
                </div>
                <div className="text-center"><Link to="#">Pay & Play</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpenTournamentDetail;
