// @flow

import React from 'react';

import Button from './Button';

type Props = {
  setConfigAction: Function,
  activeColor: string,
};

const CrosshairColor = ({ setConfigAction, activeColor } : Props) => (
  <div className="row-wrapper">
    <div className="label">Color: </div>
    <Button
      name="cl_crosshaircolor"
      label="Green"
      value="1"
      isActive={activeColor === '1'}
      onClick={setConfigAction}
    />
    <Button
      name="cl_crosshaircolor"
      label="Yellow"
      value="2"
      isActive={activeColor === '2'}
      onClick={setConfigAction}
    />
    <Button
      name="cl_crosshaircolor"
      label="Blue"
      value="3"
      isActive={activeColor === '3'}
      onClick={setConfigAction}
    />
    <Button
      name="cl_crosshaircolor"
      label="Cyan"
      value="4"
      isActive={activeColor === '4'}
      onClick={setConfigAction}
    />
    <Button
      name="cl_crosshaircolor"
      label="Custom"
      value="5"
      isActive={activeColor === '5'}
      onClick={setConfigAction}
    />
  </div>
);

export default CrosshairColor;
