// @flow

import React from 'react';

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
    className={`button ${isActive ? 'button-active' : ''}`}
    onClick={() => onClick({ [name]: value })}
  >
    {label}
  </button>
);

Button.defaultProps = defaultProps;
export default Button;
