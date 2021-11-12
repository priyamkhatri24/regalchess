import React, { Component } from "react";
import { Link } from "react-router-dom";
import Mailto from "react-protected-mailto";
import { Button, Modal } from "react-bootstrap";
import UserNameList from "./userNameList";
import * as searchServices from "../services/searchService";
import * as friendRequestService from "../services/friendRequestService";

class HeaderPart extends Component {
  state = {
    searchKey: "",
    userList: [],
  };
  addFriend = async (user_id) => {
    console.log("Button clicked...");

    const { data } = await friendRequestService.sendFriendRequest("user", {
      receiverUserId: user_id,
    });

    // console.log(this.state);
  };
  renderSearchResults = () => {
    return (
      <div>
        <ul>
          {this.state.userList.map((user) => {
            return (
              <li>
                <img src="/common/img/users/Image_13.png" alt="User" />{" "}
                <span>{user.userName}</span>
                {!user.isFriend ? (
                  <Link to="#" className="active" title="Friend Request Send">
                    <i
                      className="fa fa-user-plus"
                      onClick={() => this.addFriend(user._id)}
                    ></i>
                  </Link>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
        {this.state.userList.length > 0 ? (
          <div className="viewall text-center">
            <Link to={`/user/search-result/${this.state.searchKey}`}>
              View All List
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
  handleChange = async (e) => {
    const numberOfUsersLimit = 5;
    if (e.target.value) {
      const { data } = await searchServices.getFiveUsersAccordingToSearchKey(
        "user",
        e.target.value,
        numberOfUsersLimit
      );
      this.setState({ searchKey: e.target.value, userList: data.userList });
    } else {
      this.setState({ searchKey: "", userList: [] });
    }
  };
  handleModalShowHide() {
    console.log(this.props);
    if (!this.props.userData.userName) {
      this.setState({ showHide: !this.state.showHide });
    }
    console.log(this.state);
  }
  render() {
    const { userData: user } = this.props;
    return (
      <header className="header">
        <div className="header-actions mainleftpart">
          <div className="header-brand">
            <div className="logo chesslogo">
              <Link to="/user/dashboard" replace>
                <img
                  src="/common/img/landing/logo_white.png"
                  alt="Chess Shark"
                />
              </Link>
            </div>
            <h1 className="header-brand-text">Regal Chess</h1>
          </div>
          {/* <div
            className="sidemenu-trigger navigation-widget-trigger "
            onClick={this.props.handleClick}
          >
            <img src="/common/img/icons/menu_icon.png" alt="Menu Icon" />
          </div> */}
        </div>
        <div className="header-actions">
          <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
            <div className="burger-icon inverted">
              <div className="burger-icon-bar"></div>
              <div className="burger-icon-bar"></div>
              <div className="burger-icon-bar"></div>
            </div>
          </div>
          <nav className="navigation">
            <ul className="menu-main">
             
              <li className="menu-main-item">
                <Link to="dashboard" className="menu-main-item-link">
                  Home
                </Link>
              </li>
              <li className="menu-main-item">
                <Link to="dashboard" className="menu-main-item-link">
                About Us
                </Link>
              </li>
              <li className="menu-main-item">
                <Link to="dashboard" className="menu-main-item-link">
                  Game Room
                </Link>
              </li>
              <li className="menu-main-item">
                <Link to="dashboard" className="menu-main-item-link">
                  Tournament
                </Link>
              </li>
              <li className="menu-main-item">
                <Link to="dashboard" className="menu-main-item-link">
                  Tokens
                </Link>
              </li>
              <li className="menu-main-item">
                <Link to="dashboard" className="menu-main-item-link">
                  Refer & Earn
                </Link>
              </li>
              <div className="middlee ml-3 mr-0 "></div>
              
             
              {/* <li className="menu-main-item">
                <Link
                  to="#"
                  className="menu-main-item-link notification-home"
                  replace
                >
                  <i className="fa fa-bell"></i>
                  <p>3</p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
       
        <div className="action-item-wrap">
        <div className="d-flex">
          <div className="action-item dark header-settings-dropdown-trigger mr-2">
           
          <img
                        src="/common/img/icons/Profile-image1.png"
                        alt="User Icon"
                      />
                      
          </div>
    
                <Link to="#" className="menu-main-item-link-2 mr-5" replace>
                  Payshvi Ghodwall
                </Link>
                </div>
            
          <div className="dropdown-navigation header-settings-dropdown headerprofile">
            <div className="dropdown-navigation-header">
              <div className="user-status">
                <Link to="#" className="user-status-avatar" replace>
                  <div className="user-avatar small no-outline">
                   
                    <div className="user-avatar-badge">
                      <div className="user-avatar-badge-border">
                        <div className="hexagon-22-24">
                          <canvas width="22" height="24"></canvas>
                        </div>
                      </div>
                      <p className="user-avatar-badge-text">24</p>
                    </div>
                  </div>
                </Link>
               
               
              </div>
            </div>
           
              <Link to="profile" className="dropdown-navigation-link"  style={{marginTop:"-45px"}}>
             <i className="fa fa-user mr-1"></i> Profile Info
              </Link>
         
            <Link to="notifications" className="dropdown-navigation-link">
            <i className="fa fa-edit mr-1"></i> Edit Profile
            </Link>

          
            <Link to="notifications" className="dropdown-navigation-link">
            <i className="fa fa-bell mr-1"></i> Notifications
            </Link>
            <Link  to="logout"
                      
                      className="dropdown-navigation-link">
               <i class="fas fa-sign-out-alt mr-1"></i> Logout
            </Link>
           
          </div>
        </div>

        <Modal show={this.state.showHide} className="username-modal">
          <Modal.Body>
            <UserNameList {...this.props} />
          </Modal.Body>
        </Modal>
      </header>
    );
  }
}

export default HeaderPart;
