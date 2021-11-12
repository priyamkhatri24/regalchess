import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginleftPart extends Component {
  state = {};
  render() {
    return (
      <div className="landing-info ">
      
        <div className="tab-switch tablogins ">
          <Link
            to="login"
            className={`tab-switch-button login-register-form-trigger ${
              this.props.match.path.includes("login") ? "active" : ""
            }`}
          >
            Login
          </Link>
          {this.props.match.path.includes("coach") ? (
            ""
          ) : (
            <Link
              to="register"
              className={`tab-switch-button login-register-form-trigger ${
                this.props.match.path.includes("register") ? "active" : ""
              }`}
            >
              Register
            </Link>
          )}
        </div>
        <div className="guest-user">
          <div>
          <p>
          {/* {this.props.match.path.includes("guest") ? ( */}
              <Link to={{ pathname: "/user/register" }}>
                Register/Login as <span>User</span>
              </Link>
            {/* ) : ( */}
              {/* <Link to={{ pathname: "/guest/register" }}>
                Register/Login as <span>Guest</span>
              </Link> */}
            {/* )} */}
            </p>
            </div>
           
           <p> OR</p>
            <div>
              <p>
           <button className="button medium secondary" style={{backgroundColor:"white", color:"#5753e4"}}><img className="mr-3" src="../common/img/icons/Facebook.png"/>Continue with facebook</button>
            </p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default LoginleftPart;
