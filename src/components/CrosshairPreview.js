import React, { PropTypes } from 'react';
import { Layer, Rect, Stage, Group } from 'react-konva';

import { getPreviewColor } from '../helpers/color';

const propTypes = {
  config: PropTypes.object.isRequired,
};

const CrosshairPreview = ({ config }) => (
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

CrosshairPreview.propTypes = propTypes;
export default CrosshairPreview;
