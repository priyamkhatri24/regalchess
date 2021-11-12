import React, { Component } from "react";
import { Link } from "react-router-dom";
class PersonalCoaching extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid personal-coaching">
        <div className="grid grid-4-4-4">
          <div className="row">
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/users/Image_13.png"
                  alt="Personal Coachings"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Alix Smith</p>
                  <p class="coach-text"> alix@gmail.com </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/coaching-room">Start</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/users/Image_17.png"
                  alt="Personal Coachings"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Alix Smith</p>
                  <p class="coach-text"> alix@gmail.com </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/coaching-room">Start</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/users/Image_16.png"
                  alt="Personal Coachings"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Alix Smith</p>
                  <p class="coach-text"> alix@gmail.com </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/coaching-room">Start</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/users/Image_17.png"
                  alt="Personal Coachings"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Alix Smith</p>
                  <p class="coach-text"> alix@gmail.com </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/coaching-room">Start</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/users/Image_15.png"
                  alt="Personal Coachings"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Alix Smith</p>
                  <p class="coach-text"> alix@gmail.com </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/coaching-room">Start</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalCoaching;
