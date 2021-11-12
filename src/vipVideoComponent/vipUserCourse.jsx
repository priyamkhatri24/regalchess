import React, { Component } from "react";
import { Link } from "react-router-dom";
class VipUserCourse extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="tabsview">
          <ul>
            <li>
              <Link to="vip-available-course">Available Courses</Link>
            </li>
            <li>
              <Link to="vip-user-course" className="active">
                My Courses
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>My Courses</h3>
          </div>
          <div className="widget-box customwidget-box">
              <div className="vipvideos">
                  <div className="row">
                      <div className="col-md-6">
                           <div className="user-preview">
                               <figure class="user-preview-cover liquid vipcover"></figure>
                                <div className="user-short-description">
                                    <div class="user-short-description">
                                        <a class="user-short-description-avatar user-avatar medium no-stats" >
                                            <div class="user-avatar-content">
                                                <div class="hexagon-image-100-110">
                                                    <img className="badge-item-preview-image" src="/common/img/icons/vip_videos.png"  alt="VIP Videos"/>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <p className="user-short-description-title">Diamond Chess Video</p>
                                    <p className="user-short-description-text">VIP Video</p>
                                </div>
                                <div className="user-stats">
                                    <div className="user-stat">
                                    <p className="user-stat-title">Fork</p>
                                    <p className="user-stat-text">Technique</p>
                                    </div>
                                    <div className="user-stat">
                                    <p className="user-stat-title">2 Month</p>
                                    <p className="user-stat-text">Duration</p>
                                    </div>
                                    <div className="user-stat">
                                    <p className="user-stat-title">$200</p>
                                    <p className="user-stat-text">Price</p>
                                    </div>
                                </div>
                                <div className="user-preview-actions">
                                    <Link to="vip-course-video" className="button secondary full">
                                      View My Video
                                    </Link>
                                </div>
                            </div>
                       </div>
                       <div className="col-md-6">
                           <div className="user-preview">
                               <figure class="user-preview-cover liquid vipcover"></figure>
                                <div className="user-short-description">
                                    <div class="user-short-description">
                                        <a class="user-short-description-avatar user-avatar medium no-stats" >
                                            <div class="user-avatar-content">
                                                <div class="hexagon-image-100-110">
                                                    <img className="badge-item-preview-image" src="/common/img/icons/vip_videos.png"  alt="VIP Videos"/>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <p className="user-short-description-title">Diamond Chess Video</p>
                                    <p className="user-short-description-text">VIP Video</p>
                                </div>
                                <div className="user-stats">
                                    <div className="user-stat">
                                    <p className="user-stat-title">Fork</p>
                                    <p className="user-stat-text">Technique</p>
                                    </div>
                                    <div className="user-stat">
                                    <p className="user-stat-title">2 Month</p>
                                    <p className="user-stat-text">Duration</p>
                                    </div>
                                    <div className="user-stat">
                                    <p className="user-stat-title">$200</p>
                                    <p className="user-stat-text">Price</p>
                                    </div>
                                </div>
                                <div className="user-preview-actions">
                                    <Link to="vip-course-video" className="button secondary full">
                                      View My Video
                                    </Link>
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

export default VipUserCourse;
