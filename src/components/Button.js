import React, { PropTypes } from 'react';

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

const defaultProps = {
  isActive: false,
};

const Button = ({ label, name, value, onClick, isActive }) => (
  <button
    className={`button ${isActive ? 'button-active' : ''}`}
    onClick={() => onClick({ [name]: value })}
  >
    {label}
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
