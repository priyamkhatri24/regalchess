import React, { Component } from "react";
import * as registerAndLoginService from "../services/registerationServices/registerAndLoginUserServices";
import Form from "../reusableComponents/forms";
import Joi from "joi";
import * as registerService from "../services/registerationServices/registerAndLoginUserServices";

class UserNameList extends Form {
  state = {
    userNameList1: [],
    userNameList2: [],
    formData: { firstWord: "", secondWord: "", userName: "" },
    errors: {},
  };

  schemaSubmit = Joi.object({
    firstWord: Joi.string(),
    secondWord: Joi.string(),
    userName: Joi.string().required(),
  });

  schemaChange = {
    firstWord: Joi.string(),
    secondWord: Joi.string(),
    userName: Joi.string().required(),
  };

  handleChange = async (e) => {
    //validation on change of input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    //setting state according to input
    const formData = { ...this.state.formData };
    formData[e.currentTarget.name] = e.currentTarget.value.trim();
    if (e.currentTarget.name != "userName") {
      formData.userName = formData.userName + e.currentTarget.value.trim();
    }
    await this.setState({ formData, errors });
  };

  doSubmit = async () => {
    if (await this.props.match.path.includes("/user")) {
      const { data } = await registerService.addUserName("user", {
        userName: this.state.formData.userName,
      });
      if (data) window.location.reload();
    }
    if (await this.props.match.path.includes("/guest")) {
      console.log("guest");
      const { data } = await registerService.addUserName("guest", {
        userName: this.state.formData.userName,
      });
      if (data) window.location.reload();
    } else return;
  };

  componentDidMount = () => {
    this.getUserNameList();
  };

  getUserNameList = async () => {
    const { data } = await registerAndLoginService.getUserNameList();
    this.setState({
      userNameList1: data.userNameList1,
      userNameList2: data.userNameList2,
    });
  };
  render() {
    return (
      <div className="main-section">
        <div className="top-part">
          <img src="/common/img/icons/profile_image.png" alt="User Icon" />
          <h3>Create Your User Name!</h3>
        </div>
        <div className="form-part">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  {this.renderSelectReturningName(
                    "firstWord",
                    "List 1",
                    this.state.userNameList1
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  {this.renderSelectReturningName(
                    "secondWord",
                    "List 2",
                    this.state.userNameList2
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {this.renderInput(
                  "userName",
                  "",
                  "Enter User Name",
                  "text",
                  false,
                  "form-group",
                  ""
                )}
              </div>
            </div>
            {this.renderButton("Submit", "btn btn-primary", this.handleSubmit)}
          </form>
        </div>
      </div>
    );
  }
}

export default UserNameList;
