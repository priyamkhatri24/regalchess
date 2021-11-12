import React, { Component } from "react";
import LoginleftPart from "../loginregistrationComponents/loginleftPart";
import ResetPassword from "../loginregistrationComponents/resetPassword";
class ResetPasswordPage extends Component {
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
                    <ResetPassword {...this.props} />
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

export default ResetPasswordPage;
