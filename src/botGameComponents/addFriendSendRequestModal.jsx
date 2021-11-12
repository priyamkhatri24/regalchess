import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
class AddFriendSendRequestModal extends Component {
  state = {};
  render() {
    return (
      <Modal
        show={this.props.receiveFriendRequestShowHide}
        className="requestsend-modal"
      >
        <Modal.Body>
          <div className="main-section">
            <div className="modal-cards">
              <div className="top-heading text-center">
                <h2>Friend Request!</h2>
                <img src="/common/img/users/Image_17.png" alt="User Image" />
                <h3>{this.props.playerName}</h3>
                <p>sent you friend request</p>
              </div>
              <div className="rewuest-btn">
                <button
                  className="reject"
                  onClick={this.props.rejectFriendRequest}
                >
                  Reject
                </button>
                <button onClick={this.props.acceptFriendRequest}>Accept</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddFriendSendRequestModal;
