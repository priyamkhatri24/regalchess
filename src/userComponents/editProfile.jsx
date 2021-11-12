import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import * as getUserDetailService from "../services/registerationServices/getUserDetailsServices";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import Joi from "joi";
import { toast } from "react-toastify";
class EditProfile extends Form {
  state = {
    areas: [],
    formData: { name: "", email: "", mobileNumber: "", area: {} },
    errors: {},
  };
  // getUserProfileDetails = async () => {
  //   const formData = await getUserDetailService.getUserProfileDetails();
  //   this.setState({ formData });
  // };
  // gelListOfareas = async () => {
  //   const { data } = await registerService.getSchoolAndAreaNames();
  //   await this.setState({ areas: data.areas });
  // };
  // componentDidMount = async () => {
  //   try {
  //     await this.gelListOfareas();
  //     await this.getUserProfileDetails();
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  // schemaSubmit = Joi.object({
  //   name: Joi.string().required(),
  //   email: Joi.string()
  //     .email({ tlds: { allow: ["com", "net"] } })
  //     .required(),
  //   mobileNumber: Joi.string()
  //     .pattern(/^[0-9]+$/)
  //     .min(7)
  //     .max(14)
  //     .required()
  //     .messages({
  //       "string.base": "",
  //       "string.min": "Must have at least 7 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base": "Mobile numbers can have only digits",
  //     }),
  //   area: Joi.string().required(),
  // }).unknown();

  // schemaChange = {
  //   name: Joi.string().required(),
  //   email: Joi.string()
  //     .email({ tlds: { allow: ["com", "net"] } })
  //     .required(),
  //   mobileNumber: Joi.string()
  //     .pattern(/^[0-9]+$/)
  //     .min(7)
  //     .max(14)
  //     .required()
  //     .messages({
  //       "string.base": "",
  //       "string.min": "Must have at least 7 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base": "Mobile numbers can have only digits",
  //     }),
  //   area: Joi.string().required(),
  // };

  // doSubmit = async () => {
  //   console.log("in do submit");
  //   const { data } = await getUserDetailService.editProfileService(
  //     this.state.formData
  //   );
  //   if (data) {
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 200);
  //     this.props.history.push("/user/profile");
  //   }
  // };

  render() {
    const { formData: user } = this.state;
    console.log(user);
    return (
      <div className="content-grid">
        <div className="profile-header">
          <figure className="profile-header-cover liquid"></figure>
          <div className="profile-header-info">
            <div className="user-short-description big">
              <span className="user-short-description-avatar user-avatar big">
                <div className="user-avatar-content">
                  <div className="hexagon-image-100-110">
                    <img
                      src="/common/img/icons/Profile-image1.png"
                      alt="User Image"
                    />
                    <Link to="#" className="profilecamera">
                      <i className="fa fa-camera"></i>
                    </Link>
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
                <div className="form-row"></div>
                <div className="form-row split edit-profile">
                  {this.renderInput(
                    "name",
                    "Name",
                    null,
                    "text",
                    false,
                    "form-item",
                    "form-input"
                  )}
                  {this.renderInput(
                    "email",
                    "Your Email Id",
                    null,
                    "text",
                    true,
                    "form-item",
                    "form-input"
                  )}
                </div>
                <div className="form-row split edit-profile">
                  {this.renderInput(
                    "mobileNumber",
                    "Mobile Number",
                    null,
                    "text",
                    false,
                    "form-item",
                    "form-input"
                  )}
                    {this.renderSelect(
                      "area",
                      "Area",
                      this.state.areas,
                      user.area._id
                    )}
                </div>
                <div className="form-row split">
                  <div className="form-item">
                    {this.renderButton(
                      "Update Profile",
                      "button full secondary",
                      this.handleSubmit
                    )}
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

export default EditProfile;
