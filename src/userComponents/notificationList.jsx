import React, { Component } from "react";
import { Link } from "react-router-dom";
class NotificationList extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="tabsview">
          <ul>
            <li>
              <Link to="changePassword">Change Password</Link>
            </li>
            <li>
              <Link to="notifications" className="active">
                Notification
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Notification</h3>
            <div className="form-switch ">
              <div className="form-switch-button"></div>
            </div>
          </div>
          <div className="widget-box customwidget-box">
            <div className="notification-list">
              <div className="notification-box-list">
                <div className="notification-box">
                  <div className="user-status notification">
                    <Link className="user-status-avatar" to="#">
                      <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                          <div className="hexagon-image-30-32">
                            <img
                              src="/common/img/icons/notification.png"
                              alt="Notification"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <p className="user-status-title">
                      <Link className="bold" to="#">
                        Alix Smith
                      </Link>
                      <span className="pull-right user-status-timestamp small-space ml-3">
                        2 minutes ago
                      </span>
                    </p>
                    <p className="notifi-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printe
                    </p>
                  </div>
                </div>
                <div className="notification-box">
                  <div className="user-status notification">
                    <Link className="user-status-avatar" to="#">
                      <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                          <div className="hexagon-image-30-32">
                            <img
                              src="/common/img/icons/notification.png"
                              alt="Notification"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <p className="user-status-title">
                      <Link className="bold" to="#">
                        Alix Smith
                      </Link>
                      <span className="pull-right user-status-timestamp small-space ml-3" >
                        2 minutes ago
                      </span>
                    </p>
                    <p className="notifi-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printe
                    </p>
                  </div>
                </div>
                <div className="notification-box">
                  <div className="user-status notification">
                    <Link className="user-status-avatar" to="#">
                      <div className="user-avatar small no-outline">
                        <div className="user-avatar-content">
                          <div className="hexagon-image-30-32">
                            <img
                              src="/common/img/icons/notification.png"
                              alt="Notification"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <p className="user-status-title">
                      <Link className="bold" to="#">
                        Alix Smith
                      </Link>
                      <span className="pull-right user-status-timestamp small-space ml-3" >
                        2 minutes ago
                      </span>
                    </p>
                    <p className="notifi-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printe
                    </p>
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

export default NotificationList;
