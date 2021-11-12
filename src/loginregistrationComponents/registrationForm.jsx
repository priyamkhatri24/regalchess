import React, { Component } from "react";
import Form from "../reusableComponents/forms";
import Joi from "joi";
import { Link } from "react-router-dom";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";
import { toast } from "react-toastify";
class RegistrationForm extends Form {
  state = {
    schools: [],
    areas: [],
    formData: {
      name: "",
      username:"",
      email: "",
      mobileNumber: "",
      password: "",
      school: "",
      area: "",
    },
    errors: {},
    acceptTermsConditions: false,
  };

  // componentDidMount = async () => {
  //   try {
  //     const { data } = await registerService.getSchoolAndAreaNames();
  //     await this.setState({ schools: data.schools, areas: data.areas });
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
  //       "string.min": "Must have at least 7 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base": "Mobile numbers can have only digits",
  //     }),
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
  //   school: Joi.string().required(),
  //   area: Joi.string().required(),
  // });

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
  //       "string.min": "Must have at least 7 characters",
  //       "object.regex": "Must have at least 8 characters",
  //       "string.pattern.base": "Mobile numbers can have only digits",
  //     }),
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
  //   school: Joi.string().required(),
  //   area: Joi.string().required(),
  // };

  // toggleTermsConditions = async () => {
  //   let acceptTermsConditions = this.state.acceptTermsConditions;
  //   acceptTermsConditions = !acceptTermsConditions;
  //   await this.setState({ acceptTermsConditions });
  //   const errors = { ...this.state.errors };
  //   if (errors.acceptTermsConditions) {
  //     delete errors.acceptTermsConditions;
  //   }
  //   this.setState({ errors });
  // };

  // validateOnSubmit = () => {
  //   const result = this.schemaSubmit.validate(this.state.formData, {
  //     abortEarly: false,
  //   });
  //   if (!result.error && this.state.acceptTermsConditions) return null;
  //   const errors = {};
  //   if (result.error) {
  //     for (let item of result.error.details) {
  //       errors[item.path[0]] = item.message.toUpperCase();
  //     }
  //   }
  //   if (this.state.acceptTermsConditions === false) {
  //     errors.acceptTermsConditions = "TERMS AND CONDITIONS NOT ACCEPTED";
  //   }
  //   return errors;
  // };

  doSubmit = async () => {
  //   const { data, error } = await registerService.userRegisterService(
  //     this.state.formData
  //   );
  //   if (data) {
  //     const { data: data2, error } = await registerService.otpGeneration(
  //       this.state.formData.email.toLowerCase()
  //     );
  //     if (data2) {
        this.props.history.push({
          pathname: `/user/otp-verification`,
          state: { email: this.state.formData.email.toLowerCase() },
        });
  //     }
  //   }
  //   if (error) {
  //     return;
  //   }
  };

  render() {
    return (
      <div className="form-box login-register-form-element registration-form">
        <h2 className="form-box-title">User Registration!</h2>
        <form className="form">
          <div className="form-row">{this.renderInput("name", "Full Name")}</div>
          <div className="form-row">{this.renderInput("username", "User Name")}</div>
          <div className="form-row">
            {this.renderInput("email", "Email Address", null)}
          </div>
          <div className="form-row">
            {this.renderInput("password", "Password", null, "password")}
          </div>
         
          <div className="form-row">
            <div className="form-item checkbox-design">
              <div className="disinblock">
                <input
                  type="checkbox"
                  name="register_condition"
                  onClick={this.toggleTermsConditions}
                />
                <label class="registrationlabel">
                  I agree to the <Link to="/">terms & conditions</Link>
                </label>
              </div>
              {this.state.errors.acceptTermsConditions && (
                <div className="alert alert-danger">
                  {this.state.errors.acceptTermsConditions}
                </div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              {this.renderButton(
                "Continue",
                "button medium primary",
                this.handleSubmit
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
