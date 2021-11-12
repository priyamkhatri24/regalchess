import React, { Component } from "react";
import LoginleftPart from "../loginregistrationComponents/loginleftPart";
import GuestRegistration from "../loginregistrationComponents/guestRegistration";
class GuestRegistrationPage extends Component {
  state = {};
  componentWillMount = async () => {
    let guestUserToken = await localStorage.getItem("guestUserToken");
    if (guestUserToken) {
      await this.props.history.push("dashboard");
    }
  };
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
                    <GuestRegistration {...this.props} />
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

export default GuestRegistrationPage;
