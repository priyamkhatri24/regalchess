import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import * as registerAndLoginGuestService from "../services/registerationServices/registerAndLoginGuestUserService";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import Joi from "joi";
class GuestLogin extends Form {
  state = {
    formData: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schemaSubmit = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .required()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s)/)
      .messages({
        "string.min": "Must have at least 8 characters",
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "password must fulfill the following requirements:atleast one upperCase letter ,atleast one lowerCase letter,atleast one digit , atleast one special character and should not contain space",
      }),
  });

  schemaChange = {
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
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

  doSubmit = async () => {
    const {
      data,
      error,
    } = await registerAndLoginGuestService.guestUserLoginService(
      this.state.formData
    );
    if (data) {
      return this.props.history.push("/guest/dashboard");
    }
    if (error) {
      if (error.response.data.notVerified === true) {
        const { data: data2, error } = await registerService.otpGeneration(
          this.state.formData.email.toLowerCase()
        );
        if (data2) {
          this.props.history.push({
            pathname: `/guest/otp-verification`,
            state: { email: this.state.formData.email.toLowerCase() },
          });
        }
      }
      return;
    }
  };
  render() {
    return (
      <div className="form-box login-register-form-element formanimation">
        <h2 className="form-box-title">Guest Login</h2>
        <form className="form">
          <div className="form-row">
            {this.renderInput("email", "Email", null)}
          </div>
          <div className="form-row">
            {this.renderInput("password", "Password", null, "password")}
          </div>
          <div className="form-row space-between">
            <div className="form-item">
              <Link to="forgot-password" replace className="form-link">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              {this.renderButton(
                "Continue",
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

export default GuestLogin;
