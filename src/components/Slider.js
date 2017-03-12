import React, { PropTypes } from 'react';
import RCSlider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

const Slider = ({ name, onChange, min, max, defaultValue }) => {
  return (
    <div className="slider-wrapper">
      <div className="label">{name}:</div>
      <RCSlider
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={value => onChange({ [name]: value })}
      />
    </div>
  );
};

Slider.propTypes = propTypes;
export default Slider;
