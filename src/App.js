import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./loginPageComponents/loginPage";
import RegistrationPage from "./loginPageComponents/registrationPage";
import ForgotPasswordPage from "./loginPageComponents/forgotPasswordPage";
import OtpVerificationPage from "./loginPageComponents/otpVerificationPage";
import ResetPasswordPage from "./loginPageComponents/resetPasswordPage";
import CoachLoginPage from "./loginPageComponents/coachLoginPage";
import GuestLoginPage from "./loginPageComponents/guestLoginPage";
import GuestRegistrationPage from "./loginPageComponents/guestRegistrationPage";
import UserDashboardPage from "./userPartComponents/userDashboardPage";
import CoachDashboardPage from "./coachPartComponent/coachDashboardPage";


import { ToastContainer } from "react-toastify";
import Logout from "./commonComponents/logout";
import GuestUserDashboardPage from "./guestUserComponents.jsx/guestDashboard";
import HomePage from "./homepageComponents/homepageSection/homePage";
import LandingSection from "./homepageComponents/homepageSection/landingSection";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
        <Route exact path="/" component={LandingSection} />
          <Route exact path="/user/login" component={LoginPage} />
          <Route exact path="/user/register" component={RegistrationPage} />
          <Route
            exact
            path={[
              "/user/forgot-password",
              "/guest/forgot-password",
              "/coach/forgot-password",
            ]}
            component={ForgotPasswordPage}
          />

          <Route
            exact
            path={[
              "/user/otp-verification",
              "/guest/otp-verification",
              "/coach/otp-verification",
            ]}
            component={OtpVerificationPage}
          />
          <Route
            exact
            path={[
              "/user/reset-password",
              "/guest/reset-password",
              "/coach/reset-password",
            ]}
            component={ResetPasswordPage}
          />
          <Route exact path="/coach/login" component={CoachLoginPage} />
          <Route exact path="/guest/login" component={GuestLoginPage} />
          <Route
            exact
            path="/guest/register"
            component={GuestRegistrationPage}
          />
          <Route
            exact
            path={["/guest/logout", "/user/logout", "/coach/logout"]}
            component={Logout}
          />
          <Route path="/guest" component={GuestUserDashboardPage} />
          <Route
            path="/user"
            render={(props) => <UserDashboardPage {...props} />}
          />
          <Route path="/coach" component={CoachDashboardPage} />
          <Redirect from="/" to="/user/login" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
