import React, { Component } from "react";
import { Link } from "react-router-dom";
class HowToPlayVideoThumbNail extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4">
        <div className="how-play">
          <img
            src={`${process.env.REACT_APP_APIENDPOINT}/${this.props.imagePath}`.replace(
              "/api/./public",
              ""
            )}
            alt="Video"
          />
          <h2 className="videoname">How to Play</h2>
          <div className="video-player">
            <Link variant="primary" onClick={this.props.handleModal}>
              <img src="/common/img/video/video_icon.png" alt="video_icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HowToPlayVideoThumbNail;
