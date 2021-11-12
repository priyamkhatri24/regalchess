import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
class ModalDisplayingGameRequestFromFriend extends Component {
  state = {};
  render() {
    return (
      <Modal show={this.props.showModal} className="requestsend-modal">
        <Modal.Body>
          <div className="main-section">
            <div className="modal-cards">
              <div className="top-heading text-center">
                <h2>Game Request!</h2>
                <img src="/common/img/users/Image_17.png" alt="User Image" />
                <h3>{this.props.friendUserName}</h3>
                <p>sent you game request</p>
              </div>
              <div className="rewuest-btn">
                <button
                  className="reject"
                  onClick={this.props.rejectGameRequest}
                >
                  Reject
                </button>
                <button onClick={this.props.acceptGameRequest}>Accept</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalDisplayingGameRequestFromFriend;
