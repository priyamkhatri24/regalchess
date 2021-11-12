import React, { Component } from "react";
import LoginleftPart from "../loginregistrationComponents/loginleftPart";
import OtpVerification from "../loginregistrationComponents/otpVerification";
class OtpVerificationPage extends Component {
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
                    <OtpVerification {...this.props} />
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

export default OtpVerificationPage;
