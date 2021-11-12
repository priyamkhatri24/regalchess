import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import HowToPlayVideoThumbNail from "./howToPlayVideoThumbNail";
import httpUserService from "../services/httpUserService";
import { toast } from "react-toastify";
class HowToPlayPage extends Component {
  state = { videos: [], showHide: false, videoBeingPlayed: "" };
  /*constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }*/
  // componentDidMount = async () => {
  //   const { data: videos } = await this.getListOfHowToPlayVideos();
  //   this.setState({ videos: videos });
  // };

  // getListOfHowToPlayVideos = async () => {
  //   try {
  //     const { data } = await httpUserService.get(
  //       "user",
  //       `/video/getListOfHowToPlayVideos`
  //     );
  //     return { data };
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  // handleModalShowHide = async (videoUrl) => {
  //   await this.setState({
  //     showHide: !this.state.showHide,
  //     videoBeingPlayed: videoUrl,
  //   });
  // };

  // renderHowToPlayVideosThumbNail = () => {
  //   return this.state.videos.map((video) => {
  //     return (
  //       <HowToPlayVideoThumbNail
  //         imagePath={video.imagePath}
  //         handleModal={() => this.handleModalShowHide(video.videoUrl)}
  //       />
  //     );
  //   });
  // };
  render() {
    return (
      <>
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>How To Play</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="how-play-page">

              <div className="row">
              <div className="col-md-4">
                
                <img src="../common/img/banner/how to play.png"/>
                </div>
                <div className="col-md-4">
                
                <img src="../common/img/banner/how to play.png"/>
                </div>
                <div className="col-md-4">
                
                <img src="../common/img/banner/how to play.png"/>
                </div>
                <div className="col-md-4 mt-4 mb-3">
                
                <img src="../common/img/banner/how to play.png"/>
                </div>
                <div className="col-md-4 mt-4 mb-3">
                
                <img src="../common/img/banner/how to play.png"/>
                </div>
                <div className="col-md-4 mt-4 mb-3">
                
                <img src="../common/img/banner/how to play.png"/>
                </div>
                
                
                </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={this.state.showHide}>
      <button
        onClick={() => this.handleModalShowHide()}
        className="closebutton"
      >
        <i className="fa fa-times"></i>
      </button>
      <Modal.Body>
        <div className="react-modal-deaign">
          <iframe
            width="400"
            height="315"
            src={this.state.videoBeingPlayed}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
    </>
    );
  }
}

export default HowToPlayPage;
