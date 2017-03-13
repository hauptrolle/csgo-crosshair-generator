// @flow

import React from 'react';
import RCSlider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

type Props = {
  name: string,
  label: string,
  onChange: Function,
  min: number,
  max: number,
  step?: number,
  defaultValue: string | number,
  disabled?: boolean,
};

const defaultProps = {
  step: 1,
  disabled: false,
};

const Slider = ({ name, label, onChange, min, max, step, defaultValue, disabled } : Props) => (
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
export default Slider;
