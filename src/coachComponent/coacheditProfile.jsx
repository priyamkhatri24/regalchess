import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import * as getUserDetailService from "../services/registerationServices/getUserDetailsServices";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import Joi from "joi";
import { toast } from "react-toastify";
class CoacheditProfile extends Form {
  state = {}
  render() {
    return (
      <div className="content-grid">
        <div className="profile-header">
          <figure className="profile-header-cover liquid">
          </figure>
          <div className="profile-header-info">
            <div className="user-short-description big">
              <span className="user-short-description-avatar user-avatar big">
                <div className="user-avatar-content">
                  <div className="hexagon-image-100-110">
                    <img src="/common/img/coach/Profile_image.png" alt="User Image" />
                    <Link to="/" className="profilecamera"><i className="fa fa-camera"></i></Link>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="grid-column mt-4">
          <div className="widget-box">
            <div className="widget-box-content">
              <form className="form">
                <div className="form-row">
                </div>
                <div className="form-row split edit-profile">
                  <div className="form-item">
                    <div className="form-input small">
                      <label for="account-new-password">First Name</label>
                      <input type="text" name="account_new_password" placeholder="Alix" />
                    </div>
                  </div>
                  <div className="form-item">
                    <div className="form-input small">
                      <label for="account-new-password">Last Name</label>
                      <input type="text" name="account_new_password" placeholder="Smith" />
                    </div>
                  </div>
                </div>
                <div className="form-row split edit-profile">
                <div className="form-item">
                    <div className="form-input small">
                      <label for="account-new-password">Your Email Id</label>
                      <input type="text" name="account_new_password" placeholder="alixsmith@gmail.com" />
                    </div>
                  </div>
                  <div className="form-item">
                    <div className="form-input small">
                      <label for="account-new-password">Mobile No</label>
                      <input type="text" name="account_new_password" placeholder="+91 67676 56647" />
                    </div>
                  </div>
                </div>
                <div className="form-row split">
                  <div className="form-item">
                    <p className="button full secondary">Update Profile</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default CoacheditProfile;
