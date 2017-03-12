import React, { PropTypes } from 'react';
import RCSlider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

const Slider = ({ name, label, onChange, min, max, defaultValue }) => {
  return (
    <div className="row-wrapper">
      <div className="label">{label}:</div>
      <RCSlider
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={value => onChange({ [name]: value.toString() })}
      />
    </div>
  );
};

Slider.propTypes = propTypes;
export default Slider;
