// @flow

import React from 'react';
import CSSModules from 'react-css-modules';
import NumericInput from 'react-numeric-input';
import RCSlider from 'rc-slider/lib/Slider';

import 'rc-slider/assets/index.css';
import styles from './slider.css';

type Props = {
  name: string,
  names?: Array<string>,
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
  names: undefined,
  step: 1,
  disabled: false,
  dots: false,
};

// Update a single value
const changeSingle = (name, value, cb) => cb({ [name]: value.toString() });

// Update multiple values
const changeBulk = (names, value, cb) => names.map(name => changeSingle(name, value, cb));

const Slider = ({
  name,
  names,
  label,
  onChange,
  min,
  max,
  step,
  value,
  disabled,
  dots,
}: Props) => (
  <div styleName="root">
    <div styleName="label">{label}:</div>
    <RCSlider
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      value={value}
      dots={dots}
      onChange={v => (names ? changeBulk(names, v, onChange) : changeSingle(name, v, onChange))}
    />
    <NumericInput
      styleName="value"
      precision={step === 0.5 ? 1 : 0}
      min={min}
      max={max}
      value={value}
      disabled={disabled}
      step={step}
      onChange={valueAsString => (names ? changeBulk(names, valueAsString, onChange) : changeSingle(name, valueAsString, onChange))}
    />
  </div>
);

Slider.defaultProps = defaultProps;
export default CSSModules(Slider, styles);
