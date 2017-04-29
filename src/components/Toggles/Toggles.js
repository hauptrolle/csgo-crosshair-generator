import React from 'react';
import styled from 'styled-components';

import Toggle from '../Toggle';

type Props = {
  config: Object,
  onClick: Function,
};

const TogglesWrapper = styled.div`
  margin: 20px 0;
`;

const Toggles = ({ config, onClick }: Props) => (
  <TogglesWrapper>
    <Toggle
      name="cl_crosshairusealpha"
      label="Use Alpha"
      onClick={onClick}
      value={config.cl_crosshairusealpha}
      isActive={config.cl_crosshairusealpha === '1'}
    />

    <Toggle
      name="cl_crosshair_outline_draw"
      label="Draw Outline"
      onClick={onClick}
      value={config.cl_crosshair_outline_draw}
      isActive={config.cl_crosshair_outline_draw === '1'}
    />

    <Toggle
      name="cl_crosshairdot"
      label="Show Dot"
      onClick={onClick}
      value={config.cl_crosshairdot}
      isActive={config.cl_crosshairdot === '1'}
    />
  </TogglesWrapper>
);

export default Toggles;
