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
  dots?: boolean,
};

const defaultProps = {
  step: 1,
  disabled: false,
  dots: false,
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
  dots,
}: Props) => (
  <div className="row-wrapper">
    <div className="label">{label}:</div>
    <RCSlider
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      value={value}
      dots={dots}
      onChange={v => onChange({ [name]: v.toString() })}
    />
    <input
      className="field-value"
      type="number"
      disabled={disabled}
      min={min}
      max={max}
      value={value}
      onChange={e => onChange({ [name]: e.target.value.toString() })}
    />
  </div>
);

Slider.defaultProps = defaultProps;
export default Slider;
