import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import FriendListModal from "./friendListModal";
class MainSectionPart extends Component {
  state = {
    toggleFriend: 0,
    toggleComp: 0,
    toggleRandom: 0,
    toggleWhite: 0,
    toggleBlack: 0,
    toggle5: 0,
    toggle10: 0,
    toggle15: 0,
    toggleun: 0,
    destination: null,
    pieceColour: "white",
  };
  constructor() {
    super();
  }
  toggleFriend = async () => {
    let temp = this.state.toggleFriend;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggleFriend: temp,
      toggleComp: 0,
      toggleRandom: 0,
    });
  };
  toggleComp = async () => {
    let temp = this.state.toggleComp;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggleComp: temp,
      toggleFriend: 0,
      toggleRandom: 0,
    });
  };
  toggleRandom = async () => {
    let temp = this.state.toggleRandom;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggleRandom: temp,
      toggleFriend: 0,
      toggleComp: 0,
    });
  };
  toggleWhite = async () => {
    let temp = this.state.toggleWhite;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggleWhite: temp,
      toggleBlack: 0,
    });
  };
  toggleBlack = async () => {
    let temp = this.state.toggleBlack;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggleBlack: temp,
      toggleWhite: 0,
    });
  };
  toggle5 = async () => {
    let temp = this.state.toggle5;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggle5: temp,
      toggle10: 0,
      toggle15: 0,
      toggleun: 0,
    });
  };
  toggle10 = async () => {
    let temp = this.state.toggle10;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggle5: 0,
      toggle10: temp,
      toggle15: 0,
      toggleun: 0,
    });
  };
  toggle15 = async () => {
    let temp = this.state.toggle15;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggle5: 0,
      toggle10: 0,
      toggle15: temp,
      toggleun: 0,
    });
  };
  toggleun = async () => {
    let temp = this.state.toggleun;
    temp === 0 ? (temp = 1) : (temp = 0);
    await this.setState({
      toggle5: 0,
      toggle10: 0,
      toggle15: 0,
      toggleun: temp,
    });
  };

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
    console.log(this.state);
  }
  friendListShowHide() {
    this.setState({ showHide: !this.state.showHide });
    this.setState({ friendsshowHide: !this.state.friendsshowHide });
    console.log(this.state);
  }
  friendList1ShowHide = () => {
    this.setState({ friendsshowHide: !this.state.friendsshowHide });
    console.log(this.state);
  };
  requestsendshowHide() {
    this.setState({ friendsshowHide: !this.state.friendsshowHide });
    this.setState({ requestsendshowHide: !this.state.requestsendshowHide });
    console.log(this.state);
  }
  requestresendshowHide() {
    this.setState({ requestsendshowHide: !this.state.requestsendshowHide });
    this.setState({ requestrejectshowHide: !this.state.requestrejectshowHide });
    console.log(this.state);
  }
  requestrejectshowHide() {
    this.setState({ requestsendshowHide: !this.state.requestsendshowHide });
    this.setState({ requestrejectshowHide: !this.state.requestrejectshowHide });
    console.log(this.state);
  }
  requestexitshowHide() {
    this.setState({ requestrejectshowHide: !this.state.requestrejectshowHide });
    console.log(this.state);
  }
  requestacceptshowHide() {
    this.setState({ requestsendshowHide: !this.state.requestsendshowHide });
    console.log(this.state);
  }
  render() {
    return (
      <div className="content-grid">
        <div className="section-banner mt-2">
          
        </div>
        <div className="grid">
          <dov className="row">
            <div className="col-md-6">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/icons/Game Room1.png"
                  alt="Game Rooms"
                />
                <div className="badge-item-preview-info">
                  <p className="badge-item-preview-title">Game Room</p>
                  <p className="badge-item-preview-timestamp">
                    <Link onClick={() => this.handleModalShowHide()}>Play</Link>
                  </p>
                </div>
                <Modal show={this.state.showHide} className="gameroom-modal">
                  <Modal.Body>
                    <div className="main-section">
                      <Link
                        className="close-icon"
                        onClick={() => this.handleModalShowHide()}
                      >
                        <i className="fa fa-times"></i>
                      </Link>
                      <div className="play-with">
                        <div className="heading-part">
                          <h3>Play With</h3>
                        </div>
                        <div className="list-part">
                          <ul>
                            <li
                              className={
                                this.state.toggleFriend >= 1
                                  ? "playwith active"
                                  : "playwith"
                              }
                              onClick={() => this.toggleFriend()}
                            >
                              <Link>
                                Friend
                              </Link>
                            </li>
                           
                            <li
                              className={
                                this.state.toggleRandom >= 1
                                  ? "playwith active"
                                  : "playwith"
                              }
                              onClick={() => this.toggleRandom()}
                            >
                              <Link
                                onClick={() => {
                                  this.setState({
                                    destination: "/user/random",
                                  });
                                }}
                              >
                                Random
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    
                        <div className="play-with">
                          <div className="heading-part">
                            <h3>choose color</h3>
                          </div>
                          <div className="list-part">
                            <ul>
                              <li
                                className={
                                  this.state.toggleWhite >= 1
                                    ? "Colorwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggleWhite()}
                              >
                                <Link
                                  onClick={() => {
                                    this.setState({
                                      pieceColour: "white",
                                    });
                                  }}
                                >
                                  white
                                </Link>
                              </li>
                              <li
                                className={
                                  this.state.toggleBlack >= 1
                                    ? "Colorwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggleBlack()}
                              >
                                <Link
                                  onClick={() => {
                                    this.setState({
                                      pieceColour: "black",
                                    });
                                  }}
                                >
                                  black
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                    

    
                        <div className="play-with">
                          <div className="heading-part">
                            <h3>Game Mode</h3>
                          </div>
                          <div className="list-part">
                            <ul>
                              <li
                                className={
                                  this.state.toggle5 >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggle5()}
                              >

                                <Link
                                 
                                >
                                  5 Minute
                                </Link>
                              </li>
                              <li  className={
                                  this.state.toggle10 >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggle10()}>
                                <Link
                                 
                                >
                                  10 Minute
                                </Link>
                              </li>
                              <li  className={
                                  this.state.toggle15 >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggle15()}>
                                <Link
                                 
                                >
                                  15 Minute
                                </Link>
                              </li>
                              <li  className={
                                  this.state.toggleun >= 1
                                    ? "playwith active"
                                    : "playwith"
                                }
                                onClick={() => this.toggleun()}>
                                <Link
                                
                                >
                                  Unlimited
                                </Link>
                              </li>
                            </ul>
                            <div className="row mt-5 mb-4">
                              <div className="col-4 m-auto">
                            <button className="button medium1 secondary1"><Link to="/user/game-room-listing" style={{color:"white"}}>Continue </Link></button>
                            </div>
                            </div>
                          </div>
                        </div>
                    
                    </div>
                  </Modal.Body>
                </Modal>
                <FriendListModal
                  friendList={this.props.friendList}
                  sendGameRequestToFriend={(friend) => {
                    this.props.sendGameRequestToFriend(friend);
                  }}
                  modalShow={this.state.friendsshowHide}
                  friendListShowHide={this.friendList1ShowHide}
                />
                <Modal
                  show={this.state.requestsendshowHide}
                  className="requestsend-modal"
                >
                  <Modal.Body>
                    <div className="main-section">
                      <div className="modal-cards">
                        <div className="top-heading text-center">
                          <h2>Challenge!</h2>
                          <img
                            src="/common/img/users/Image_17.png"
                            alt="User Image"
                          />
                          <h3>Mo Danish </h3>
                          <p>
                            Mo Danish Want to play with you{" "}
                            <span>10 Min Game</span>
                          </p>
                        </div>
                        <div className="rewuest-btn">
                          <button
                            className="reject"
                            onClick={() => this.requestrejectshowHide()}
                          >
                            Reject
                          </button>
                          <button onClick={() => this.requestacceptshowHide()}>
                            Accept
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Modal
                  show={this.state.requestrejectshowHide}
                  className="requestsend-modal"
                >
                  <Modal.Body>
                    <div className="main-section">
                      <div className="modal-cards">
                        <div className="top-heading text-center">
                          <h2 className="text-danger">Reject!</h2>
                          <img
                            src="/common/img/users/Image_17.png"
                            alt="User Image"
                          />
                          <h3>Mo Danish </h3>
                          <p>Mo Danish has been reject your request</p>
                        </div>
                        <div className="rewuest-btn">
                          <button
                            className="reject"
                            onClick={() => this.requestexitshowHide()}
                          >
                            Exit
                          </button>
                          <button onClick={() => this.requestresendshowHide()}>
                            Resend
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="col-md-6">
              <div className="badge-item-preview">
                <img
                  className="badge-item-preview-image"
                  src="/common/img/icons/Tournaments.png"
                  alt="Tournaments"
                />
                <div className="badge-item-preview-info">
                  <p className="badge-item-preview-title">Tournaments</p>
                  <p className="badge-item-preview-timestamp">
                    <Link to="/user/school-tournament">Participate</Link>
                  </p>
                </div>
              </div>
            </div>
          
            
           
          </dov>
        </div>
        <div className="grid mt-3">
          <div className="user-preview landscape">
            <figure class="user-preview-cover liquid ">
              <img src="/common/img/icons/token.png" alt="acchivement" className="" />
            </figure>
            <div className="user-preview-info">
              <div className="user-short-description landscape tiny">
                <p className="user-short-description-title" style={{fontSize:"1.2rem", marginTop:"-10px", color:"#3E3F5E", width:"100px", marginLeft:"30px"}}>My Tokens</p>
              </div>
              <div className="user-stats">
                <div className="user-stat">
                  <p className="user-stat-title" style={{fontSize:"16px"}}>1526 Tokens</p>
                  {/* <div class="progress">
  <div class="progress-value"></div>
</div> */}
                
                </div>
               
               
               
              </div>
              <div className="user-preview-actions">
                <div className="achievment-link">
                  <Link to="/user/achievements" style={{fontSize:"14px"}}>Purchase</Link>
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
