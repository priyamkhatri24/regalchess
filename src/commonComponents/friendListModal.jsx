import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
class FriendListModal extends Component {
  state = {};

  renderFriends = () => {
    return this.props.friendList.map((friend) => {
      return (
        <tr>
          <td>
            <img src="/common/img/users/Image_17.png" alt="User Image" />
          </td>
          <td>{friend.friendId.userName}</td>
          <td>400 (Points)</td>
          <td>
            <Link
              onClick={() => {
                this.props.sendGameRequestToFriend(friend);
              }}
              className="requestlink"
            >
              Send Request
            </Link>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <Modal show={this.props.modalShow} className="friendlis-modal">
        <Modal.Body>
          <div className="main-section">
            <Link
              className="close-icon"
              onClick={() => this.props.friendListShowHide()}
            >
              <i className="fa fa-times"></i>
            </Link>
            <div className="modal-cards">
              <div className="title-deading">
                <h3>Send Request for Game</h3>
              </div>
              <div className="searchpart">
                <table class="table table-bordered">
                  <tbody>{this.renderFriends()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FriendListModal;
