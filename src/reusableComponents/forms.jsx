import React, { Component } from "react";
import Joi from "joi";
import Input from "./microComponents/input";
import Select from "./microComponents/select";
import TextArea from "./microComponents/textArea";
import SelectReturningName from "./microComponents/selectReturningName";

class Form extends Component {
  state = {
    formData: {},
    errors: {},
  };

  validateOnSubmit = () => {
    // const result = this.schemaSubmit.validate(this.state.formData, {
    //   abortEarly: false,
    // });
    // if (!result.error) return null;
    // const errors = {};
    // for (let item of result.error.details) {
    //   errors[item.path[0]] = item.message;
    // }
    // return errors;
  };

  validateOnChange = (input) => {
    // const obj = { [input.name]: input.value.trim() };
    // const subSchema = Joi.object({
    //   [input.name]: this.schemaChange[input.name],
    // });
    // const { error } = subSchema.validate(obj);
    // if (!error) return null;
    // return error.details[0].message;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // const errors = this.validateOnSubmit();

    // this.setState({ errors: errors || {} });

    // if (errors) return;

    await this.doSubmit();
  };

  handleChange = async (e) => {
    //validation on change of input
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateOnChange(e.currentTarget);
    // if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    // else delete errors[e.currentTarget.name];
    // //setting state according to input
    // const formData = { ...this.state.formData };
    // formData[e.currentTarget.name] = e.currentTarget.value.trim();
    // await this.setState({ formData, errors });
  };

  renderInput = (
    name,
    label,
    placeholder = null,
    type = "text",
    disabled = false,
    classNameOutterDiv = "form-item",
    classNameInnerDiv = "form-input"
  ) => {
    const { formData, errors } = this.state;
    return (
      <Input
        // onChange={this.handleChange}
        value={formData[name]}
        label={label}
        name={name}
        error={errors[name]}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        classNameOutterDiv={classNameOutterDiv}
        classNameInnerDiv={classNameInnerDiv}
      />
    );
  };
  renderTextArea = (name, label, type = "text", rows = "4") => {
    const { formData, errors } = this.state;
    return (
      <TextArea
  
        value={formData[name]}
        label={label}
        name={name}
        error={errors[name]}
        type={type}
        rows={rows}
      />
    );
  };

  renderSelect = (
    name,
    label,
    options,
    selected_id = false,
    classNameOutterDiv = "form-item",
    classNameInnerDiv = "form-input"
  ) => {
    const { formData, errors } = this.state;
    return (
      <Select
        // onChange={this.handleChange}
        value={formData[name]}
        label={label}
        options={options}
        name={name}
        error={errors[name]}
        selected_id={selected_id}
        classNameOutterDiv={classNameOutterDiv}
        classNameInnerDiv={classNameInnerDiv}
      />
    );
  };

  renderSelectReturningName = (
    name,
    label,
    options,
    selected_id = false,
    classNameOutterDiv = "form-item",
    classNameInnerDiv = "form-input"
  ) => {
    const { formData, errors } = this.state;
    return (
      <SelectReturningName
        onChange={this.handleChange}
        value={formData[name]}
        label={label}
        options={options}
        name={name}
        error={errors[name]}
        selected_id={selected_id}
        classNameOutterDiv={classNameOutterDiv}
        classNameInnerDiv={classNameInnerDiv}
      />
    );
  };

  renderButton = (
    label,
    buttonClassName = "btn btn-main-primary btn-block",
    handleSubmit,
    disabled = () => false,
    name = "default"
  ) => {
    return (
      <button
        className={buttonClassName}
        disabled={disabled()}
        onClick={handleSubmit}
        name={name}
      >
        {label}
      </button>
    );
  };
}

export default Form;
