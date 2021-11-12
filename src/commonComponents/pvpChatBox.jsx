import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
class PvpChatBox extends Component {
  state = {
    formData: {
      message: "",
    },
    errors: {},
  };

  schemaSubmit = Joi.object({
    message: Joi.string().required(),
  });

  schemaChange = {
    message: Joi.string().required(),
  };

  validateOnSubmit = () => {
    const result = this.schemaSubmit.validate(this.state.formData, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateOnChange = (input) => {
    const obj = { [input.name]: input.value.trim() };
    const subSchema = Joi.object({
      [input.name]: this.schemaChange[input.name],
    });
    const { error } = subSchema.validate(obj);
    if (!error) return null;
    return error.details[0].message;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validateOnSubmit();

    this.setState({ errors: errors || {} });

    if (errors) return;

    await this.doSubmit();
  };

  doSubmit = () => {
    this.props.sendMessage(this.state.formData.message);
    this.setState({ formData: { message: "" } });
  };

  handleChange = async (e) => {
    //validation on change of input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    //setting state according to input
    const formData = { ...this.state.formData };
    formData[e.currentTarget.name] = e.currentTarget.value;
    await this.setState({ formData, errors });
  };
  renderSingleChatMessage = (messageObject) => {
    if (messageObject.incoming) {
      return (
        <li className="incomming">
          <p>{messageObject.message}</p>
        </li>
      );
    } else if (!messageObject.incoming) {
      return (
        <li className="outgoining">
          <p>{messageObject.message}</p>
        </li>
      );
    }
  };
  renderAllChatMessages = () => {
    return (
      <ul>
        {this.props.chatMessages.map((messageObject) => {
          return this.renderSingleChatMessage(messageObject);
        })}
      </ul>
    );
  };

  renderChat = () => {
    return (
      <div className="chatt-parts">
        <div className="heading-parts">
          <h3>Chat</h3>
        </div>
        <div className="chatt-messege">{this.renderAllChatMessages()}</div>
        <div className="text-center">
          <div className="suggection-messege">
            <ul>
              <li>
                <a
                  onClick={() => {
                    this.setState({ formData: { message: "thanks" } });
                  }}
                >
                  Thanks
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.setState({ formData: { message: "okay" } });
                  }}
                >
                  Okay
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="reply-box">
          <input
            type="text"
            className="form-contral"
            value={this.state.formData.message}
            id="message"
            name="message"
            onChange={this.handleChange}
          ></input>
          <button className="btn primary-btn" onClick={this.handleSubmit}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    );
  };
  render() {
    return this.renderChat();
  }
}

export default PvpChatBox;
