import React, { PropTypes } from 'react';
import RCSlider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const defaultProps = {
  step: 1,
  disable: false,
};

const Slider = ({ name, label, onChange, min, max, step, defaultValue, disabled }) => (
  <div className="row-wrapper">
    <div className="label">{label}:</div>
    <RCSlider
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      onChange={value => onChange({ [name]: value.toString() })}
    />
  </div>
);

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
export default Slider;
