import React, { Component } from "react";
import { Link } from "react-router-dom";
class CoachingType extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="tabsviewuserside">
          <ul>
            <li><Link className="active" to="/user/coaching-type-list">Type of Coaching</Link></li>
            <li><Link to="/user/my-coaching-list">My Coaching</Link></li>
          </ul>
        </div>
        <div className="grid-column coaching-part mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-main">
                  <div className="content-part">
                    <p>Coach Name<span>Jonathan Smith</span></p>
                    <p>Class<span>01 Class</span></p>
                    <p>Price<span>$ 50</span></p>
                  </div>
                  <div className="link-part">
                    <Link to="/user/coaching-detail">Enroll</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CoachingType;
