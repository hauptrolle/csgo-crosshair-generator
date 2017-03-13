// @flow

import React from 'react';
import * as presets from '../presets';

type Props = {
  onClick: Function,
};

const presetArray = Object.keys(presets).map(p => presets[p]);

const Presets = ({ onClick } : Props) => (
  <div className="row-wrapper">
    <div className="label">Load Preset:</div>
    <div>
      {
        presetArray.map(preset => (
          <button
            key={preset.name}
            className="button"
            onClick={() => onClick(preset.config)}
          >
            {preset.name}
          </button>
        ))
      }
    </div>
  </div>
);

export default Presets;
