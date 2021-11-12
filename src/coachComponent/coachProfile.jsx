import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as getUserDetailService from "../services/registerationServices/getUserDetailsServices";
class CoachProfile extends Component {
  state = {
  };

  render() {
    if (this.state.userProfileDetails === "") return null;
    const { userProfileDetails: user } = this.state;
    return (
      <div className="content-grid">
        <div className="profile-header">
          <figure className="profile-header-cover liquid"></figure>
          <div className="profile-header-info">
            <div className="user-short-description big">
              <span class="user-short-description-avatar user-avatar big">
                <div class="user-avatar-content">
                  <div class="hexagon-image-100-110">
                    <img src="/common/img/coach/Profile_image.png" />
                  </div>
                </div>
              </span>
              <p className="user-short-description-title">
                <Link to="#">Jonty Smith</Link>
              </p>
              <p className="user-short-description-text">
                <Link to="#">(Coach)</Link>
              </p>
              <div className="user-details">
                <ul>
                  <li>
                    Email Id : <span>jonty@gmail.com</span>
                  </li>
                  <li>
                   Mobile No : <span>+955 655 756 7675</span>
                  </li>
                </ul>
              </div>
              <div className="edit-link">
                <Link to="/coach/coacheditProfile">Edit Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachProfile;
