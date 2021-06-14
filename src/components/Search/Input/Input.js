import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

function Input({ query, handleInputChange }) {
  return (
    <input
      name="text"
      type="text"
      autoComplete="off"
      placeholder="Ingredients, meal, keyword..."
      autoFocus
      onChange={event => handleInputChange(event)}
      value={query}
    />
  );
}

Input.propTypes = {
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Input;
