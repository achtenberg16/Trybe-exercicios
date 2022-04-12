import React from "react";

class Input extends React.Component {
  render() {
    const { name, type, value, handleChange } = this.props;
    return (
      <label>
        {name}
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        ></input>
      </label>
    );
  }
}

export default Input;
