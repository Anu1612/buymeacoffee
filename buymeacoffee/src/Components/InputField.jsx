import React from "react";

const InputField = props => {
  return (
    <div className="input-container">
      <input
        autocomplete="off"
        className="input-clicked"
        name={props.name}
        type={props.text}
        placeholder={props.placeholder}
        required
        onChange={props.handleInputChange}
      />
    </div>
  );
};

export default InputField;
