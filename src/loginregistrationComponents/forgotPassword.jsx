import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import Joi from "joi";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import * as coachService from "../services/registerationServices/coachServices.js";

class ForgotPassword extends Form {
  state = {
    formData: {
      email: "",
    },
    errors: {},
  };

  // schemaSubmit = Joi.object({
  //   email: Joi.string()
  //     .email({ tlds: { allow: ["com", "net"] } })
  //     .required(),
  // });

  // schemaChange = {
  //   email: Joi.string()
  //     .email({ tlds: { allow: ["com", "net"] } })
  //     .required(),
  // };

  doSubmit = async () => {
  //   let data;
  //   if (this.props.match.path.includes("/coach")) {
  //     const { data: dataTemp, error } = await coachService.otpGeneration(
  //       this.state.formData.email.toLowerCase()
  //     );
  //     data = dataTemp;
  //   } else {
  //     const { data: dataTemp, error } = await registerService.otpGeneration(
  //       this.state.formData.email.toLowerCase()
  //     );
  //     data = dataTemp;
  //   }
  //   if (data) {
      this.props.history.replace({
        pathname: "otp-verification",
        state: { forgotPassword: true, email: this.state.formData.email },
      });
  //   }
  };

  render() {
    return (
      <div className="form-box login-register-form-element forgotpage">
        <h2 className="form-box-title">Forgot Password</h2>
        <form className="form">
          <div className="form-row">
            {this.renderInput("email", "Enter Your Email", null)}
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

export default ForgotPassword;
