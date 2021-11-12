import React, { Component } from "react";
class Logout extends Component {
  state = {};
  componentDidMount = async () => {
    if (await localStorage.getItem("guestUserToken")) {
      await localStorage.removeItem("guestUserToken");
    }
    if (await localStorage.getItem("userToken")) {
      await localStorage.removeItem("userToken");
    }
    if (await localStorage.getItem("coachToken")) {
      await localStorage.removeItem("coachToken");
    }
    return this.props.history.push("login");
  };
  render() {
    return null;
  }
}

export default Logout;
