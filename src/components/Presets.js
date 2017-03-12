import React, { PropTypes } from 'react';
import * as presets from '../presets';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const presetArray = Object.keys(presets).map(p => presets[p]);

const Presets = ({ onClick }) => (
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

Presets.propTypes = propTypes;
export default Presets;
