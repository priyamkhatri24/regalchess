import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as searchServices from "../services/searchService";
import * as friendRequestService from "../services/friendRequestService";
class SearchResult extends Component {
  state = {
    userList: [],
  };
  componentDidMount = async () => {
    const { data } = await searchServices.getUsersAccordingToSearchKey(
      "user",
      this.props.match.params.searchKey
    );
    console.log(data);
    this.setState({ userList: data.userList });
  };
  addFriend = async (user_id) => {
    // console.log("Button clicked...");
    if (this.state.friendRequestSent !== true) {
      const { data } = await friendRequestService.sendFriendRequest("user", {
        receiverUserId: user_id,
      });
      this.setState({ friendRequestSent: true });
    }
    // console.log(this.state);
  };
  renderSearchResults = () => {
    return this.state.userList.map((user) => {
      return (
        <div className="notification-box">
          <div className="user-status notification">
            <Link className="user-status-avatar" to="#">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div className="hexagon-image-30-32">
                    <img src="/common/img/users/Image_17.png" alt="User" />
                  </div>
                </div>
              </div>
            </Link>
            <p className="user-status-title">
              <Link className="bold" to="#">
                {user.userName}
              </Link>
            </p>
            <p className="notifi-text">""</p>
            {!user.isFriend ? (
              <div class="action-request-list">
                <p class="action-request accept with-text">
                  <span
                    class="action-request-text"
                    onClick={() => this.addFriend(user._id)}
                  >
                    Add Friend
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Search Result</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="notification-list">
              <div className="notification-box-list">
                {this.renderSearchResults()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
