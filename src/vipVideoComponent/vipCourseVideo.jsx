import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBestMove } from "../services/gameServices";

class VipCourseVideo extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid player-game-part">
        <div className="grid-column mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="widget-box video-sidebar">
                <p className="widget-box-title">Course Video</p>
                <div className="widget-box-content">
                  <div className="post-peek-list">
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                    <div className="post-peek">
                      <div className="post-peek-image">
                        <div className="picture small round liquid">
                          <img
                            src="/common/img/icons/play.png"
                            alt="Video Image"
                          />
                        </div>
                      </div>
                      <p className="post-peek-title">
                        <Link to="#">Introduction How to play Chess</Link>
                      </p>
                      <p className="post-peek-text">03.33 Mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="widget-box video-display-part">
                <p className="widget-box-title">
                  Introduction How to play Chess
                </p>
                <div className="video-design">
                  <video
                    controls
                    src="https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/Chess_16_Videvo_preview.webm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VipCourseVideo;
