import React, { Component } from "react";
import { Link } from "react-router-dom";
class LeftSidebar extends Component {
  render() {
    const { userData: user } = this.props;
    return (
      <nav
        id="navigation-widget"
        className={
          this.props.leftBar
            ? "navigation-widget navigation-widget-desktop sidebar transform-sidebar left"
            : "navigation-widget navigation-widget-desktop sidebar transform-sidebar left sidebar-hide"
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
                      src="../common/img/icons/img5.png"
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
                            src="/common/img/coach/Profile_image.png"
                            alt="User Image"
                          />
                        </div>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <Link to="#">{user.name}</Link>
                    </p>
                    <p className="user-short-description-text">
                      <span>{user.email}</span>
                    </p>
                  </div>
                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="dashboard" className="menu-item-link">
                        <img
                          src="/common/img/icons/user.png"
                          alt="My Account"
                        />
                        <span>My Account</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="about-us" className="menu-item-link">
                        <img
                          src="/common/img/icons/about_us_icon.png"
                          alt="About Us"
                        />
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="help-and-support" className="menu-item-link">
                        <img
                          src="/common/img/icons/help_&_support_icon.png"
                          alt=" Help & Support"
                        />
                        <span>Help & Support</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="terms-and-condition" className="menu-item-link">
                        <img
                          src="/common/img/icons/terms_icon.png"
                          alt="Terms & Condition"
                        />
                        <span>Terms & Condition</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="logout" className="menu-item-link">
                        <img
                          src="/common/img/icons/log_out_icon.png"
                          alt="Logout"
                        />
                        <span>Logout</span>
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
