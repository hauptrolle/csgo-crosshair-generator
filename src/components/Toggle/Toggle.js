// @flow

import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './toggle.css';

type Props = {
  name: string,
  label: string,
  value: string,
  onClick: Function,
  isActive: boolean,
};

const Toggle = ({ name, label, value, onClick, isActive }: Props) => (
  <button
    styleName={`root ${isActive ? 'active' : ''}`}
    onClick={() => onClick({ [name]: (value === '0' ? '1' : '0') })}
  >
    {label}
  </button>
);

export default CSSModules(Toggle, styles, { allowMultiple: true });
