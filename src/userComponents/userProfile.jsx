import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as getUserDetailService from "../services/registerationServices/getUserDetailsServices";
class UserProfile extends Component {
  state = {
    userProfileDetails: "",
  };

  // getUserProfileDetails = async () => {
  //   const userProfileDetails = await getUserDetailService.getUserProfileDetails();
  //   await this.setState({ userProfileDetails });
  //   console.log(this.state.userProfileDetails);
  // };

  // componentWillMount = async () => {
  //   await this.getUserProfileDetails();
  // };

  render() {
    // if (this.state.userProfileDetails === "") return null;
    // const { userProfileDetails: user } = this.state;
    return (
      <div className="content-grid">
        <div className="profile-header">
          <figure className="profile-header-cover liquid"></figure>
          <div className="profile-header-info">
            <div className="user-short-description big">
              <span class="user-short-description-avatar user-avatar big">
                <div class="user-avatar-content">
                  <div class="hexagon-image-100-110">
                    <img src="/common/img/icons/Profile-image1.png" />
                  </div>
                </div>
              </span>
              <p className="user-short-description-title mb-0 ml-4" style={{marginTop:"-5px"}}>
                <Link to="#">
                  Payshvi 
                  {/* {user.name} */}
                  </Link>
              </p>
              <p className="user-short-description-text ml-4" style={{marginTop:"-3px"}}>
                <Link to="#">
                test1@mailinator.com
                  {/* {user.email} */}
                </Link>
              </p>
              <div className="user-details ml-4">
                <ul>
                  <li>
                    Username : <span>*****</span>
                  </li>
                  <li>
                    Mobile No : <span>
                      {/* {user.mobileNumber} */}
                      9874964329
                      </span>
                  </li>
                  <li>
                    Area Name : <span>Delhi</span>
                  </li>
                  <li>
                    School Name : <span> St. Francis</span>
                  </li>
                </ul>
              </div>
              <div className="edit-link ml-4">
                <Link to="editProfile">Edit Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
