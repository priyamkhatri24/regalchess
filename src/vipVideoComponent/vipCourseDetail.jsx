import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import * as complainService from "../services/complainServices";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class VipCourseDetail extends Form {
  state = {}
  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Available Courses</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="vip-video-details">
                <div className="grid grid-3-3-3 centered">
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                            <div className="earning-stat-box-icon-wrap stat-item">
                            <i class="fa fa-cube"></i>
                            </div>
                            <p className="earning-stat-box-title">Fork</p>
                            <p className="earning-stat-box-text">Technique</p>
                        </div>
                    </div>
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                            <div className="earning-stat-box-icon-wrap stat-item">
                              <i class="fa fa-calendar"></i>
                            </div>
                            <p className="earning-stat-box-title">2 Month</p>
                            <p className="earning-stat-box-text">Duration </p>
                        </div>
                    </div>
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                            <div className="earning-stat-box-icon-wrap stat-item">
                                <i class="fa fa-play-circle"></i>
                            </div>
                            <p className="earning-stat-box-title">15 Videos</p>
                            <p className="earning-stat-box-text">No of Video</p>
                        </div>
                    </div>
                </div>
                <div className="video-description">
                  <h3>Description/Rules</h3>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className="video-fees">Coaching fee : <span>$200</span> </p>
                   <div className="text-center"><Link to="#">Enroll</Link></div>  
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VipCourseDetail;
