import React from 'react';
import CSSModules from 'react-css-modules';
import Toggle from '../Toggle';

import styles from './toggles.css';

type Props = {
  config: Object,
  onClick: Function,
};

const Toggles = ({ config, onClick }: Props) => (
  <div styleName="root">
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
  </div>
);

export default CSSModules(Toggles, styles, { allowMultiple: true });
