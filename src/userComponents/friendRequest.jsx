import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as friendRequestService from "../services/friendRequestService";
class FriendRequest extends Component {
  state = {
    friendRequestsReceived: [],
  };

  acceptFriendRequest = (friendRequest) => {
    const { data, error } = friendRequestService.acceptFriendRequest("user", {
      sender: friendRequest.friendId._id,
    });

    if (data) window.location.reload();
  };

  rejectFriendRequest = (friendRequest) => {
    const { data, error } = friendRequestService.rejectFriendRequest("user", {
      sender: friendRequest.friendId._id,
    });
    if (data) window.location.reload();
  };
  renderFriendRequests = () => {
    return this.state.friendRequestsReceived.map((friendRequest) => {
      return (
        <div className="notification-box">
          <div className="user-status notification">
            <Link className="user-status-avatar" to="#">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div className="hexagon-image-30-32">
                    <img src="/common/img/users/Image_13.png" alt="User" />
                  </div>
                </div>
              </div>
            </Link>
            <p className="user-status-title">
              <Link className="bold" to="#">
                {friendRequest.friendId.userName}
              </Link>
            </p>
            <p className="notifi-text">""</p>
            <div class="action-request-list">
              <p class="action-request accept with-text">
                <span
                  class="action-request-text"
                  onClick={() => this.acceptFriendRequest(friendRequest)}
                >
                  Confirm
                </span>
              </p>
              <p class="action-request accept with-text">
                <span
                  class="action-request-text"
                  onClick={() => this.rejectFriendRequest(friendRequest)}
                >
                  Not Now
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  componentDidMount = async () => {
    const { data } = await friendRequestService.getMyFriendRequests("user");
    console.log(data);
    this.setState({ friendRequestsReceived: data.friendRequestsReceived });
  };
  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Friend Request</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="notification-list">
              <div className="notification-box-list">
                {this.renderFriendRequests()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendRequest;
