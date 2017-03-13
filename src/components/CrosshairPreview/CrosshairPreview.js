// @flow

import React from 'react';
import { Layer, Rect, Stage, Group } from 'react-konva';

import { getPreviewColor } from '../../helpers/color';

type Props = {
  config: Object
};

const CrosshairPreview = ({ config } : Props) => (
  <div className="crosshair-preview">
    <Stage width={960} height={400}>
      <Layer>
        <Group
          x={50}
          y={50}
        >
          <Rect
            width={10}
            height={50}
            fill={getPreviewColor(config)}
          />
        </Group>
      </Layer>
    </Stage>
  </div>
);

export default CrosshairPreview;
