import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Toggle = ({ name, label, value, onClick, isActive }) => (
  <div className="row-wrapper">
    <div className="label">{label}:</div>
    <button
      className={`toggle ${isActive ? 'toggle-active' : ''}`}
      onClick={() => onClick({ [name]: (value === '0' ? '1' : '0') })}
    />
  </div>
);

Toggle.propTypes = propTypes;
export default Toggle;
