// @flow

import React from 'react';
import CSSModules from 'react-css-modules';
import * as presets from '../../presets';

import styles from './presets.css';

type Props = {
  onClick: Function,
};

const presetArray = Object.keys(presets).map(p => presets[p]);

const Presets = ({ onClick } : Props) => (
  <div styleName="root">
    <div styleName="label">Load Preset:</div>
    <div>
      {
        presetArray.map(preset => (
          <button
            key={preset.name}
            styleName="button"
            onClick={() => onClick(preset.config)}
          >
            {preset.name}
          </button>
        ))
      }
    </div>
  </div>
);

export default CSSModules(Presets, styles);
