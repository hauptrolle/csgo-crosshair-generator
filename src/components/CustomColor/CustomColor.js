// @flow

import React from 'react';
import styled from 'styled-components';

import Slider from '../Slider';
// import { getPreviewColor } from '../../helpers/color';

type Props = {
  config: Object,
  onChange: Function,
  disabled: boolean,
};

const CustomColorWrapper = styled.div``;

const CustomColorSlider = styled.div``;

// Todo: Add color preview again
/* const ColorPreview = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.background};
`; */

const CustomColor = ({ config, onChange, disabled }: Props) => (
  <CustomColorWrapper>
    <CustomColorSlider>
      <Slider
        name="cl_crosshaircolor_r"
        label="Red"
        onChange={onChange}
        min={0}
        max={255}
        disabled={disabled}
        value={parseInt(config.cl_crosshaircolor_r, 10)}
      />
      <Slider
        name="cl_crosshaircolor_g"
        label="Green"
        onChange={onChange}
        min={0}
        max={255}
        disabled={disabled}
        value={parseInt(config.cl_crosshaircolor_g, 10)}
      />
      <Slider
        name="cl_crosshaircolor_b"
        label="Blue"
        onChange={onChange}
        min={0}
        max={255}
        disabled={disabled}
        value={parseInt(config.cl_crosshaircolor_b, 10)}
      />
    </CustomColorSlider>
    {/* <ColorPreview
      background={getPreviewColor(config)}
    /> */}
  </CustomColorWrapper>
);

export default CustomColor;
