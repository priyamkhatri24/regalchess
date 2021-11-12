import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import Joi from "joi";
import * as registerAndLoginService from "../services/registerationServices/registerAndLoginUserServices";
import * as coachService from "../services/registerationServices/coachServices";
class ChangePassword extends Form {
  state = {
    formData: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    errors: {},
  };

  schemaSubmit = Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string()
      .required()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
      .messages({
        "string.min": "Must have at least 8 characters",
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
      }),
    confirmNewPassword: Joi.any()
      .equal(Joi.ref("newPassword"))
      .required()
      .label("Confirm New password")
      .messages({ "any.only": "{{#label}} does not match" }),
  });

  schemaChange = {
    oldPassword: Joi.string()
      .required()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
      .messages({
        "string.min": "Must have at least 8 characters",
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
      }),
    newPassword: Joi.string()
      .required()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
      .messages({
        "string.min": "Must have at least 8 characters",
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
      }),
    confirmNewPassword: Joi.string()
      .required()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
      .messages({
        "string.min": "Must have at least 8 characters",
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
      }),
  };

  validateOnSubmit = () => {
    const result = this.schemaSubmit.validate(this.state.formData, {
      abortEarly: false,
    });
    if (
      !result.error &&
      this.state.formData.confirmNewPassword === this.state.formData.newPassword
    )
      return null;
    if (result.error) {
      const errors = {};
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
      return errors;
    }
    if (
      this.state.formData.confirmNewPassword !== this.state.formData.newPassword
    ) {
      const errors = {};
      errors.confirmNewPassword = "password mismatch";
      return errors;
    }
  };

  validateOnChange = (input) => {
    const obj = { [input.name]: input.value.trim() };
    const subSchema = Joi.object({
      [input.name]: this.schemaChange[input.name],
    });
    const { error } = subSchema.validate(obj);
    if (
      !error &&
      this.state.formData.confirmNewPassword === this.state.formData.newPassword
    )
      return null;
    if (error) {
      return error.details[0].message;
    }
    if (
      input.name === "confirmNewPassword" &&
      input.value !== this.state.formData.newPassword
    ) {
      return "new password and new confirm password mismatch";
    }
  };

  doSubmit = async () => {
    let stake;
    if (await this.props.match.path.includes("/guest")) stake = "guest";
    if (await this.props.match.path.includes("/user")) stake = "user";
    if (await this.props.match.path.includes("/coach")) stake = "coach";
    if (stake === "coach") {
      {
        const { data } = await coachService.changePassword(
          stake,
          this.state.formData
        );
        if (data) {
          this.props.history.push(`dashboard`);
        }
      }
    } else {
      const { data } = await registerAndLoginService.changePassword(
        stake,
        this.state.formData
      );
      if (data) {
        this.props.history.push(`dashboard`);
      }
    }
  };

  render() {
    return (
      <div className="content-grid">
        <div className="tabsview">
          <ul>
            <li>
              <Link to="changePassword" class="active">
                Change Password
              </Link>
            </li>
            <li>
              <Link to="notifications">Notification</Link>
            </li>
          </ul>
        </div>
        <div className="grid-column mt-4">
          <div className="headingtitle">
            <h3>Change Password</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="widget-box-content">
              <form className="form">
                <div className="form-row split edit-profile">
                  <div className="form-item">
                    <div className="form-input small">
                      {this.renderInput(
                        "oldPassword",
                        "Old Password",
                        "*********",
                        "password"
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-row split edit-profile">
                  <div className="form-item">
                    <div className="form-input small">
                      {this.renderInput(
                        "newPassword",
                        "New Password",
                        "*********",
                        "password"
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-row split edit-profile">
                  <div className="form-item">
                    <div className="form-input small">
                      {this.renderInput(
                        "confirmNewPassword",
                        "Confirm New Password",
                        "*********"
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-row split">
                  <div className="form-item">
                    {this.renderButton(
                      "Update Password",
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

export default ChangePassword;
