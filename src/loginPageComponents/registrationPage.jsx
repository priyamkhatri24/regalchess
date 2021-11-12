import React, { Component } from "react";
import LoginleftPart from "../loginregistrationComponents/loginleftPart";
import RegistrationForm from "../loginregistrationComponents/registrationForm";
class RegistrationPage extends Component {
  state = {};
  // componentWillMount = async () => {
  //   let userToken = await localStorage.getItem("userToken");
  //   if (userToken) {
  //     await this.props.history.push("dashboard");
  //   }
  // };
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
                    <RegistrationForm {...this.props} />
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

export default RegistrationPage;
