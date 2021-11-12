import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import Joi from "joi";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import * as coachService from "../services/registerationServices/coachServices";
class ResetPassword extends Form {
  state = {
    formData: {
      password: "",
      confirmPassword: "",
    },
    errors: {},
  };

  // schemaSubmit = Joi.object({
  //   password: Joi.string()
  //     .min(8)
  //     .required()
  //     .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
  //     .messages({
  //       "string.min": "Must have at least 8 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base":
  //         "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
  //     }),
  //   confirmPassword: Joi.any()
  //     .equal(Joi.ref("password"))
  //     .required()
  //     .label("Confirm Password")
  //     .messages({ "any.only": "{{#label}} does not match" }),
  // });

  // schemaChange = {
  //   password: Joi.string()
  //     .min(8)
  //     .required()
  //     .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
  //     .messages({
  //       "string.min": "Must have at least 8 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base":
  //         "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
  //     }),
  //   confirmPassword: Joi.string()
  //     .required()
  //     .min(8)
  //     .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
  //     .messages({
  //       "string.min": "Must have at least 8 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base":
  //         "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
  //     }),
  // };

  doSubmit = async () => {
  //   if (await this.props.match.path.includes("/user")) {
  //     const { data } = await registerService.resetPassword(
  //       "user",
  //       this.state.formData
  //     );
  //     if (data) {
  //       await this.removeToken();
  //       await this.props.history.replace(`login`);
  //     }
  //   }
  //   if (await this.props.match.path.includes("/guest")) {
  //     console.log("guest");
  //     const { data } = await registerService.resetPassword(
  //       "guest",
  //       this.state.formData
  //     );
  //     if (data) {
  //       await this.removeToken();
  //       await this.props.history.replace(`login`);
  //     }
  //   }
  //   if (this.props.match.path.includes("/coach")) {
  //     const { data } = await coachService.resetPassword(this.state.formData);
  //     if (data) {
  //       await this.removeToken();
        await this.props.history.replace(`login`);
  //     }
  //   } else return;
  };

  // removeToken = async () => {
  //   await localStorage.removeItem("guestUserToken");
  //   await localStorage.removeItem("userToken");
  // };

  // componentWillUnmount = async () => {
  //   await this.removeToken();
  //   await this.props.history.replace("login");
  // };

  render() {
    return (
      <div className="form-box login-register-form-element forgotpage">
        <h2 className="form-box-title">Reset Password</h2>
        <form className="form">
          <div className="form-row">
            {this.renderInput("password", "New Password", null, "password")}
          </div>
          <div className="form-row">
            {this.renderInput("confirmPassword", "Confirm New Password", null)}
          </div>
          <div className="form-row">
            <div className="form-item">
              {this.renderButton(
                "Submit",
                "button medium secondary",
                this.handleSubmit
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
