import React, { Component } from "react";
import { Link } from "react-router-dom";
class MainSectionPart extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
        <div className="section-banner">
          <p className="section-banner-title">Regal Chess</p>
          <p className="section-banner-text">
            Check what you frirnds have been up to!
          </p>
        </div>
        <div className="grid grid-4-4-4">
          <div className="row">
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/coach/personal_coaching.png"
                  alt="Personal Coachings"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Personal Coachings</p>
                  <p class="coach-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard. </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/personal-coaching">View</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/coach/orgnaised_tournament.png"
                  alt="Orgnaised Tournament"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Organize Tournament</p>
                  <p class="coach-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard. </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/organize-tournament">View</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/coach/upcoming_tournament.png"
                  alt="Upcoming Tournament"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Upcoming Tournament</p>
                  <p class="coach-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard. </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/tournament-list">View</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/coach/complete_tournament.png"
                  alt="Complete Tournament"
                />
                <div className="badge-item-preview-info ml150">
                  <p className="badge-item-preview-title">Complete Tournament</p>
                  <p class="coach-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard. </p>
                  <p className="badge-item-preview-timestamp coach-view">
                    <Link to="/coach/complete-tournament">View</Link>
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

export default MainSectionPart;
