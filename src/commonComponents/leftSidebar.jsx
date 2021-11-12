import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
class LeftSidebar extends Component {
  render() {
    const { userData: user } = this.props;
    return (
      <nav
        id="navigation-widget"
        className={
          this.props.leftBar
            ? "navigation-widget navigation-widget-desktop sidebar transform-sidebar left"
            : "navigation-widget navigation-widget-desktop sidebar transform-sidebar left"
            // "navigation-widget navigation-widget-desktop sidebar transform-sidebar left sidebar-hide"
        }
        data-simplebar="init"
      >
        <div className="simplebar-wrapper">
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset">
              <div className="simplebar-content-wrapper">
                <div className="simplebar-content">
                  <figure className="navigation-widget-cover liquid">
                    <img
                      src="/common/img/icons/profile_back.png"
                      alt="User Image"
                    />
                  </figure>
                  <div className="user-short-description">
                    <a className="user-short-description-avatar user-avatar medium">
                      <div className="user-avatar-border">
                        <div className="hexagon-120-132">
                          <canvas width="120" height="132"></canvas>
                        </div>
                      </div>
                      <div className="user-avatar-content">
                        <div className="hexagon-image-82-90">
                          <img
                            src="/common/img/icons/Profile-image1.png"
                            alt="User Image"
                          />
                        </div>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <Link to="#">
                        Payshvi Ghodwall
                      </Link>
                    </p>
                    <p className="user-short-description-text" style={{marginTop:"-13px"}}>
                     <span>test1@mailinator.com</span>
                    </p>
                  </div>
                  <div className="user-stats">
                    <div className="user-stat">
                      <p className="user-stat-title">100</p>
                      <p className="user-stat-text">Wins</p>
                    </div>
                    <div className="user-stat">
                      <p className="user-stat-title">32</p>
                      <p className="user-stat-text">Lost</p>
                    </div>
                    <div className="user-stat">
                      <p className="user-stat-title">30</p>
                      <p className="user-stat-text">Draw</p>
                    </div>
                  </div>
                  <ul className="menu">
                    <li className="menu-item">
                      <Link
                        to="my-account"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes("my-account")
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/user.png"
                          alt="My Account"
                        />
                        <span className="ml-4px">My Account</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="how-to-Play"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes("how-to-Play")
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/how_to_play_icon.png"
                          alt="How to play"
                        />
                        <span> How to play</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="refer-earn"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes(
                            "refer-earn"
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/refer.png"
                          alt="Refer"
                        />
                        <span className="ml-4px">Refer & Earn</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="about-us"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes("about-us")
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/about_us_icon.png"
                          alt="About Us"
                        />
                        <span> About Us</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="help-and-support"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes(
                            "help-and-support"
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/help.png"
                          alt=" Help & Support"
                          
                        />
                        <span className="ml-4px"> Help & Support</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="terms-and-condition"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes(
                            "terms-and-condition"
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/term.png"
                          alt="Terms & Condition"
                        />
                        <span> Terms & Conditions</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="privacy-policy"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes(
                            "privacy-policy"
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/privacy.png"
                          alt="Provacy Policy"
                        />
                        <span> Privacy Policy</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="logout"
                        className={`menu-item-link ${
                          this.props.location.pathname.includes("logout")
                            ? "active"
                            : ""
                        }`}
                      >
                        <img
                          src="/common/img/icons/logout.png"
                          alt="Logout"
                        />
                        <span> Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="simplebar-placeholder"></div>
        </div>
        <div className="simplebar-track simplebar-horizontal">
          <div className="simplebar-scrollbar"></div>
        </div>
        <div className="simplebar-track simplebar-vertical">
          <div className="simplebar-scrollbar"></div>
        </div>
      </nav>
    );
  }
}

export default LeftSidebar;
