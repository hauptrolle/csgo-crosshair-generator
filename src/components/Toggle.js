// @flow

import React from 'react';

type Props = {
  name: string,
  label: string,
  value: string,
  onClick: Function,
  isActive: boolean,
};

const Toggle = ({ name, label, value, onClick, isActive } : Props) => (
  <div className="row-wrapper">
    <div className="label">{label}:</div>
    <button
      className={`toggle ${isActive ? 'toggle-active' : ''}`}
      onClick={() => onClick({ [name]: (value === '0' ? '1' : '0') })}
    />
  </div>
);

export default Toggle;
