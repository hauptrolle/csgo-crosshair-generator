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
  value: number,
  disabled?: boolean,
};

const defaultProps = {
  step: 1,
  disabled: false,
};

const Slider = ({
  name,
  label,
  onChange,
  min,
  max,
  step,
  value,
  disabled,
} : Props) => (
  <div className="row-wrapper">
    <div className="label">{label}:</div>
    <RCSlider
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={v => onChange({ [name]: v.toString() })}
    />
  </div>
);

Slider.defaultProps = defaultProps;
export default Slider;
