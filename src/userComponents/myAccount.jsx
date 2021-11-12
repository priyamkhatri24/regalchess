import React, { Component } from "react";
import { Link } from "react-router-dom";
class MyAccount extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="section-banner mt-2">
          {/* <p className="section-banner-title">My Account</p> */}
          {/* <p className="section-banner-text" style={{marginTop:"-20px"}}>
            Check what you frirnds have been up to!
          </p> */}
        </div>
        <div className="grid grid-4-4-4">
          <dov className="row">
            <div className="col-md-6">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/icons/Profile.png"
                  alt="My Profile"
                />
                <div className="badge-item-preview-info">
                  <p className="badge-item-preview-title">My Profile</p>
                  <p className="badge-item-preview-timestamp">
                    <Link to="profile">View Detail</Link>
                  </p>
                </div>
              </div>
            </div>
          
            
            <div className="col-md-6">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/icons/Setting.png"
                  alt="Seeting"
                />
                <div className="badge-item-preview-info">
                  <p className="badge-item-preview-title">Setting</p>
                  <p className="badge-item-preview-timestamp">
                    <Link to="changePassword">View Detail</Link>
                  </p>
                </div>
              </div>
            </div>
          </dov>
        </div>
      </div>
    );
  }
}

export default MyAccount;
