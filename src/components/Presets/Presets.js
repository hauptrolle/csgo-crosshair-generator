// @flow

import React from 'react';
import * as presets from '../../presets';

import Row from '../Row';
import Label from '../Label';
import Button from '../Button';

type Props = {
  onClick: Function,
};

const presetArray = Object.keys(presets).map(p => presets[p]);

const Presets = ({ onClick } : Props) => (
  <Row>
    <Label label="Load Preset:" />
    <div>
      {
        presetArray.map(preset => (
          <Button
            key={preset.name}
            onClick={() => onClick(preset.config)}
            label={preset.name}
          />
        ))
      }
    </div>
  </Row>
);

export default Presets;
