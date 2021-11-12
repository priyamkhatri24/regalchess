import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import Form from "../reusableComponents/forms";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import * as coachService from "../services/registerationServices/coachServices.js";
class OtpVerification extends Form {
  state = {
    formData: { otp: "" },
    errors: {},
  };

  // schemaSubmit = Joi.object({
  //   otp: Joi.number().required(),
  // });

  // schemaChange = {
  //   otp: Joi.number().required(),
  // };

  // componentDidMount = async () => {
  //   await localStorage.removeItem("userToken");
  //   await localStorage.removeItem("guestUserToken");
  //   if (!this.props.location.state)
  //     return this.props.history.push("/user/login");
  //   return;
  // };

  handleResetPassword = async () => {
  //   let stake;
  //   if (this.props.match.path.includes("/coach")) {
  //     const { data, error } = await coachService.otpVerification({
  //       otp: this.state.formData.otp,
  //       email: this.props.location.state.email.toLowerCase(),
  //     });
  //     if (error) return;
  //     else {
  //       if (data) {
  //         return await this.props.history.replace("reset-password");
  //       }
  //     }
  //   } else if (await this.props.match.path.includes("guest")) stake = "guest";
  //   else if (await this.props.match.path.includes("user")) stake = "user";
  //   const { data, error } = await registerService.otpVerification(stake, {
  //     otp: this.state.formData.otp,
  //     email: this.props.location.state.email.toLowerCase(),
  //   });
  //   if (error) return;
  //   else {
  //     if (data) {
        return await this.props.history.replace("reset-password");
  //     }
  //   }
  };

  handleOtpVerficationForUserRegistration = async () => {
  //   let stake;
  //   if (await this.props.match.path.includes("guest")) stake = "guest";
  //   if (await this.props.match.path.includes("user")) stake = "user";
  //   const { data, error } = await registerService.otpVerification(stake, {
  //     otp: this.state.formData.otp,
  //     email: this.props.location.state.email.toLowerCase(),
  //   });
  //   if (error) return;
  //   else {
  //     if (data.guestUser) {
        // return await this.props.history.push("/guest/dashboard");
  //     } else {
        return await this.props.history.push("/user/dashboard");
  //     }
  //   }
  };

  doSubmit = async () => {
    if (this.props.location.state && this.props.location.state.forgotPassword) {
      this.handleResetPassword();
    } else {
      await this.handleOtpVerficationForUserRegistration();
    }
  };

  // resendOtp = async () => {
  //   await registerService.otpGeneration(
  //     this.props.location.state.email.toLowerCase()
  //   );
  //   this.setState({ formData: { otp: "" } });
  //   return;
  // };

  render() {
    if (!this.props.location.state) return null;
    return (
      <div className="form-box login-register-form-element otppage">
        <h2 className="form-box-title">Verify OTP</h2>
        <form className="form">
          <div className="form-row">
            {this.renderInput("otp", "Enter Your OTP", null)}
          </div>
          <div className="form-row space-between">
            <div className="form-item">
              <Link
                to={{
                  pathname: "/user/otp-verification",
                  state: {
                    email: this.props.location.state.email.toLowerCase(),
                  },
                }}
                className="form-link"
                onClick={this.resendOtp}
              >
                Resend Otp
              </Link>
            </div>
          </div>
          <div className="form-row">
            {this.renderButton(
              "Next",
              "button medium secondary",
              this.handleSubmit
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default OtpVerification;
