import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import * as complainService from "../services/complainServices";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class CoachingDetail extends Form {
  state = {}
  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Coaching Detail</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="vip-video-details">
              <div className="grid centered">
                <div className="upcomming-tournamnet">
                  <div className="user-stats">
                    <div className="user-stat">
                      <p className="user-stat-title">Jnothan Smith</p>
                      <p className="user-stat-text"> Coach Name</p>
                    </div>
                    <div className="user-stat">
                      <p className="user-stat-title">28-03-2021 </p>
                      <p className="user-stat-text">Duration</p>
                    </div>
                    <div className="user-stat">
                      <p className="user-stat-title">16 Classes </p>
                      <p className="user-stat-text">No of Classes</p>
                    </div>
                    <div className="user-stat">
                      <p className="user-stat-title">Saturday/Sunday </p>
                      <p className="user-stat-text">Batches</p>
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
                  <p className="video-fees">Coaching Fees : <span>$50</span> </p>
                  <p className="video-fees pull-right">Select Date : <span><i className="fa fa-calendar"></i></span> </p>
                </div>
                <div className="text-center"><Link className="mr-5" to="/user/coach-detail">Profile</Link><Link to="#">Enroll</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachingDetail;
