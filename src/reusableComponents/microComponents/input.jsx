import React, { Component } from "react";
class Input extends Component {
  state = {
    type: "text",
  };

  constructor(props) {
    super(props);
    this.state.type = this.props.type;
  }

  typeChange = () => {
    let type;
    this.state.type === "password" ? (type = "text") : (type = "password");
    this.setState({ type });
  };

  render() {
    const {
      name,
      value,
      error,
      label,
      disabled,
      type,
      placeholder,
      classNameOutterDiv,
      classNameInnerDiv,
      ...rest
    } = this.props;
    return (
      <div className={classNameOutterDiv}>
        <div className={classNameInnerDiv}>
          <label htmlFor={name}>{label}</label>
          <input
            {...rest}
            value={value}
            id={name}
            type={this.state.type}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
          />
          {type === "password" ? (
            <i
              className={`fa eyepassword fa-eye${
                this.state.type === "password" ? "" : "-slash"
              }`}
              onClick={this.typeChange}
            ></i>
          ) : (
            ""
          )}
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
}

export default Input;
