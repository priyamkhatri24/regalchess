import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
class TakeBackRequestModal extends Component {
  state = {};
  render() {
    return (
      <Modal
        show={this.props.takeBackRequestSendShowHide}
        className="requestsend-modal"
      >
        <Modal.Body>
          <div className="main-section">
            <div className="modal-cards">
              <div className="top-heading text-center">
                <h2>Take Back Request!</h2>
                <img src="/common/img/users/Image_17.png" alt="User Image" />
                <h3>{this.props.playerName}</h3>
                <p>sent you a take back request</p>
              </div>
              <div className="rewuest-btn">
                <button
                  className="reject"
                  onClick={this.props.takeBackRequestRejectShowHide}
                >
                  Reject
                </button>
                <button onClick={this.props.takeBackRequestAcceptShowHide}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default TakeBackRequestModal;
