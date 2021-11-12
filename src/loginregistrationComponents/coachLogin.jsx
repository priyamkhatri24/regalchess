import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import * as coachService from "../services/registerationServices/coachServices.js";
import Joi from "joi";
class CoachLogin extends Form {
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
    password: Joi.string().required().min(8),
  });

  schemaChange = {
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required().min(8),
  };

  doSubmit = async () => {
    const { data, error } = await coachService.coachLoginService(
      this.state.formData
    );
    if (data) {
      return this.props.history.push("dashboard");
    }
    if (error) {
      return;
    }
  };

  render() {
    return (
      <div className="form-box login-register-form-element formanimation">
        <h2 className="form-box-title">Coach Login</h2>
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
        <p class="form-text text-center">
          Login as <Link to="/user/login">User</Link> OR Login as{" "}
          <Link to="/guest/login">Guest</Link>
        </p>
      </div>
    );
  }
}

export default CoachLogin;
