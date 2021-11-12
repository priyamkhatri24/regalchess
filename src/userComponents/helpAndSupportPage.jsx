import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import * as complainService from "../services/complainServices";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class HelpAndSupportPage extends Form {
  // state = {
  //   formData: {
  //     query: "",
  //   },
  //   errors: {},
  // };

  // schemaSubmit = Joi.object({
  //   query: Joi.string().required(),
  // });
  // schemaChange = {
  //   query: Joi.string().required(),
  // };

  // doSubmit = async () => {
  //   try {
  //     let stake;
  //     if (await this.props.match.path.includes("guest")) stake = "guest";
  //     if (await this.props.match.path.includes("user")) stake = "user";
  //     if (await this.props.match.path.includes("coach")) stake = "coach";
  //     const { data } = await complainService.postComplain(stake, {
  //       query: this.state.formData.query,
  //     });
  //     toast.success(data.message);
  //     if (data) {
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     toast.error("complaint could not be registered. kindly try again");
  //   }
  // };
  render() {
    return (

      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Help & Support</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="page-form-area">
            <form className="form">
            <div className="row" >
                  <div className="col-md-12">
                <div className="row d-flex">
                  <div className="col-md-6">
                  {this.renderInput("name", "Full Name")}
                  </div>
                
                
                  <div className="col-md-6">
                  {this.renderInput("email", "Email Address", null)}
                  </div>
                  </div>
                </div>
                </div>
            
              
            
                <div className="row mt-3">
                  <div className="col-md-12">
            
                      <div className="form-item">
                        <div className="form-group  mb-0">
                  <label className="label-part" >Any Query? Ask us here</label>
                  <textarea type="text" placeholder="Write your query" className="textarea-height" rows="6"></textarea>
                  </div>
                  </div>
                    {/* {this.renderTextArea(
                      "query",
                      "Any Query? Ask us here",
                      "text",
                      "4"
                    )} */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {this.renderButton(
                      "Submit",
                      "btn btn-primary",
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

export default HelpAndSupportPage;
