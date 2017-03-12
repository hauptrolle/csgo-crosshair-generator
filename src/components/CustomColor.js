import React, { PropTypes } from 'react';

import Slider from './Slider';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

const CustomColor = ({ onChange }) => (
  <div className="custom-color">
    <div className="custom-color-slider">
      <Slider
        name="cl_crosshaircolor_r"
        label="Red"
        onChange={onChange}
        min={0}
        max={255}
        defaultValue={50}
      />
      <Slider
        name="cl_crosshaircolor_g"
        label="Green"
        onChange={onChange}
        min={0}
        max={255}
        defaultValue={250}
      />
      <Slider
        name="cl_crosshaircolor_b"
        label="Blue"
        onChange={onChange}
        min={0}
        max={255}
        defaultValue={50}
      />
    </div>
    <div className="custom-color-preview">
      preview
    </div>
  </div>
);

CustomColor.propTypes = propTypes;

export default CustomColor;
