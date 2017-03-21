// @flow

import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './button.css';

type Props = {
    label: string,
    name: string,
    value: string,
    onClick: Function,
    isActive: boolean,
};

const defaultProps = {
  isActive: false,
};

const Button = ({ label, name, value, onClick, isActive } : Props) => (
  <button
    styleName={`root ${isActive ? 'active' : ''}`}
    onClick={() => onClick({ [name]: value })}
  >
    {label}
  </button>
);

Button.defaultProps = defaultProps;
export default CSSModules(Button, styles, { allowMultiple: true });
