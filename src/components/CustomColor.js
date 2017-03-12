import React, { PropTypes } from 'react';

import Slider from './Slider';

const propTypes = {
  config: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const CustomColor = ({ config, onChange }) => (
  <div className="custom-color">
    <div className="custom-color-slider">
      <Slider
        name="cl_crosshaircolor_r"
        label="Red"
        onChange={onChange}
        min={0}
        max={255}
        defaultValue={parseInt(config.cl_crosshaircolor_r, 10)}
      />
      <Slider
        name="cl_crosshaircolor_g"
        label="Green"
        onChange={onChange}
        min={0}
        max={255}
        defaultValue={parseInt(config.cl_crosshaircolor_g, 10)}
      />
      <Slider
        name="cl_crosshaircolor_b"
        label="Blue"
        onChange={onChange}
        min={0}
        max={255}
        defaultValue={parseInt(config.cl_crosshaircolor_b, 10)}
      />
    </div>
    <div className="custom-color-preview">
      preview
    </div>
  </div>
);

CustomColor.propTypes = propTypes;

export default CustomColor;
