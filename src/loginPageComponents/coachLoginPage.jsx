import React, { Component } from "react";
import LoginleftPart from "../loginregistrationComponents/loginleftPart";
import CoachLogin from "../loginregistrationComponents/coachLogin";
class CoachLoginPage extends Component {
  state = {};
  render() {
    return (


      <div className="landing">
        <div className="container-part">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="login-leftpart">
                  <LoginleftPart {...this.props} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="login-rightpart">
                  <div className="landing-form">
                    <CoachLogin {...this.props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachLoginPage;
