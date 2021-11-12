import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import Form from "../reusableComponents/forms";
import { toast } from "react-toastify";
class TournamentSession extends Form {
  state = {};
  render() {
    return (
      <div className="content-grid session-tournament">
        <div className="grid-column mt-4">
          <div className="widget-box">
            <div className="session-part">
              <video width="320" height="240" controls>
                  <source src="/common/img/video/chess.webm" type="video/mp4"/>
                </video>
                <p className="videosession">Video Session</p>
                <p className="starttournament"><Link to="/coach/tournament-match">Start Tournament</Link></p>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default TournamentSession;
