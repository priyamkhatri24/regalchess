import React, { Component } from "react";
import { Link } from "react-router-dom";
import Mailto from "react-protected-mailto";
class HeaderPart extends Component {
  state = {};
  render() {
    const { userData: user } = this.props;
    return (
      <header className="header">
        <div className="header-actions mainleftpart">
          <div className="header-brand">
            <div className="logo chesslogo">
              <img src="../common/img/landing/logo.png" alt="Chess Shark" />
            </div>
            <h1 className="header-brand-text">Regal Chess</h1>
          </div>
          <div className="sidemenu-trigger navigation-widget-trigger " onClick={this.props.handleClick}>
            <img src="/common/img/icons/menu_icon.png" alt="Menu Icon" />
          </div>
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
              
             
              <li className="menu-main-item">
                <Link to="#" className="menu-main-item-link notification-home">
                  <i className="fa fa-bell"></i>
                  <p>3</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-actions search-bar">
          <div className="interactive-input dark">
            <input
              type="text"
              id="search-main"
              name="search_main"
              placeholder="Search here ..."
            />
            <div className="interactive-input-icon-wrap">
              <img
                src="/common/img/icons/white_search_icon.png"
                alt="Search Icon"
              />
            </div>
          </div>
        </div>
        <div className="action-item-wrap">
          <div className="action-item dark header-settings-dropdown-trigger">
            <img src="/common/img/icons/seeting_icon.png" alt="Setting Icon" />
          </div>
          <div className="dropdown-navigation header-settings-dropdown headerprofile">
            <div className="dropdown-navigation-header">
              <div className="user-status">
                <Link to="#" className="user-status-avatar">
                  <div className="user-avatar small no-outline">
                    <div className="user-avatar-content">
                      <img
                        src="/common/img/coach/Profile_image.png"
                        alt="User Image"
                      />
                    </div>
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
                <p className="user-status-title">
                  <span className="bold">{user.name}</span>
                </p>
                <p className="user-status-text small">
                   {user.email}
                </p>
              </div>
            </div>
            <p className="dropdown-navigation-category">My Profile</p>
            <Link to="profile" className="dropdown-navigation-link">
              Profile Info
            </Link>
            
            <Link to="notifications" className="dropdown-navigation-link">
              Notifications
            </Link>
            <Link to="#" className="dropdown-navigation-link">
              Logout
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderPart;
