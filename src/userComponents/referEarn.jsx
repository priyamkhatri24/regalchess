import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../reusableComponents/forms";
import httpUserService from "../services/httpUserService";
const parse = require("html-react-parser");
class ReferEarn extends Form {
//   state = {
//     editorState: null,
//   };

  // componentDidMount = async () => {
  //   let stake;
  //   if (await this.props.match.path.includes("guest")) stake = "guest";
  //   if (await this.props.match.path.includes("user")) stake = "user";
  //   if (await this.props.match.path.includes("coach")) stake = "user";
  //   const { data, error } = await httpUserService.get(
  //     stake,
  //     `/getPrivacyPolicy`
  //   );
  //   data.content = await data.content.replaceAll(`"`, "");
  //   data.content = await data.content.replaceAll("\\n", "");
  //   await this.setState({ editorState: data.content });
  // };

  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Refer & Earn</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="page-content-area">
            <div className="upcomming-tournamnet">
                
                    <div className="user-preview-info justify-content-center">
                    
                <img
                  className="invite-img"
                  src="/common/img/icons/refer1.png"
                  alt="Seeting"
                />
                
                </div>
                     
                     
                
                  
                    </div>
                   
                    <div className="page-form-area mt-3">
              <form className="form">
                
                <div className="row" >
                  <div className="col-md-8 m-auto pb-5">
                <div className="row d-flex">
                  <div className="col-md-8">
                  <p className="invite-text" style={{fontSize:"16px", fontWeight:"700", color:"#A9A9A9"}}>Share the invitation through Email</p>
                  {this.renderInput("email", "Email Address", null)}
                 
                  </div>
                
                
                  <div className="col-md-4" style={{marginTop:"40px"}}>
                      <div></div>
                  {this.renderButton(
                      "Invite",
                      "btn btn-primary",
                      this.handleSubmit
                    )}
                  </div>
                  </div>
                </div>
                </div>
            
                
              </form>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default ReferEarn;
