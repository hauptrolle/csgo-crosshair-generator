// @flow

import React, { Component } from 'react';
import { Layer, Rect, Stage, Group } from 'react-konva';

import { getPreviewColor } from '../../helpers/color';

type Props = {
  config: Object
};

type State = {
  follow: boolean,
  x: number,
  y: number,
};

const canvasWidth = 1100;
const canvasHeight = 400;

class CrosshairPreview extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.handleLayerClick = this.handleLayerClick.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);

    this.state = {
      follow: false,
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    };
  }

  handleLayerClick() {
    this.setState({
      follow: !this.state.follow,
    });
  }

  handleMousemove(e: Object) {
    if (this.state.follow) {
      // Thanks to: http://www.jacklmoore.com/notes/mouse-position/
      const target = e.target || e.srcElement;
      const rect = target.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;

      this.setState({
        x: posX,
        y: posY,
      });
    }
  }

  render() {
    const { config } = this.props;
    const { x, y } = this.state;

    return (
      <div
        className="crosshair-preview"
        onClick={this.handleLayerClick}
        onMouseMove={this.handleMousemove}
      >
        <Stage
          width={canvasWidth}
          height={canvasHeight}
        >
          <Layer>
            <Group
              x={x}
              y={y}
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
  }
}

export default CrosshairPreview;
