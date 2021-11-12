import React from "react";
const SelectReturningName = ({
  selected_id,
  name,
  error,
  options,
  label,
  classNameOutterDiv,
  classNameInnerDiv,
  ...rest
}) => {
  return (
    <div className={classNameOutterDiv}>
      <div className={classNameInnerDiv}>
        <label htmlFor={name}>{label}</label>
        <select {...rest} id={name} name={name} className="form-control">
          <option value="">{`Select ${label}`}</option>
          {options.map((option) => (
            <option
              key={option._id}
              value={option.name}
              selected={option._id === selected_id ? true : false}
            >
              {option.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectReturningName;
