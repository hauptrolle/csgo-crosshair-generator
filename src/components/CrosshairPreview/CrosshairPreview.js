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
  handleLayerClick: Function;
  handleMousemove: Function;

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

    // Thanks to https://github.com/kstdnr/csgocfgr_client/blob/master/app/components/crosshair-canvas.js
    let crosshairLength = parseInt(config.cl_crosshairsize, 10) * 2;
    const crosshairWidth = parseFloat(config.cl_crosshairthickness) * 2;
    const crosshairGap = parseInt(config.cl_fixedcrosshairgap, 10) + 4;
    const outlineThickness = parseInt(config.cl_crosshair_outline, 10);

    if (parseInt(config.cl_crosshairsize, 10) > 2) {
      crosshairLength = parseInt(crosshairLength, 10) + 1;
    }

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
            <Group>
              {/* Draw outline */}
              {config.cl_crosshair_outline_draw === '1' ?
                <Group>
                  <Rect
                    x={(x + ((crosshairWidth / 2) + crosshairGap)) - outlineThickness}
                    y={(y - (crosshairWidth / 2)) - outlineThickness}
                    width={crosshairLength + (outlineThickness * 2)}
                    height={crosshairWidth + (outlineThickness * 2)}
                    fill={'#000000'}
                  />
                  <Rect
                    x={(x - ((crosshairLength + (crosshairWidth / 2)) + crosshairGap)) - outlineThickness}
                    y={(y - (crosshairWidth / 2)) - outlineThickness}
                    width={crosshairLength + (outlineThickness * 2)}
                    height={crosshairWidth + (outlineThickness * 2)}
                    fill={'#000000'}
                  />
                  <Rect
                    x={(x - (crosshairWidth / 2)) - outlineThickness}
                    y={(y - ((crosshairLength + (crosshairWidth / 2) + crosshairGap))) - outlineThickness}
                    width={crosshairWidth + (outlineThickness * 2)}
                    height={crosshairLength + (outlineThickness * 2)}
                    fill={'#000000'}
                  />
                  <Rect
                    x={(x - (crosshairWidth / 2)) - outlineThickness}
                    y={(y + ((crosshairWidth / 2) + crosshairGap)) - outlineThickness}
                    width={crosshairWidth + (outlineThickness * 2)}
                    height={crosshairLength + (outlineThickness * 2)}
                    fill={'#000000'}
                  />
                </Group>
              : undefined}

              {/* Draw outline for dot */}
              {config.cl_crosshairdot === '1' && config.cl_crosshair_outline_draw === '1' ?
                <Rect
                  x={(x - (crosshairWidth / 2)) - outlineThickness}
                  y={(y - (crosshairWidth / 2)) - outlineThickness}
                  width={crosshairWidth + (outlineThickness * 2)}
                  height={crosshairWidth + (outlineThickness * 2)}
                  fill={'#000000'}
                />
              : undefined}

              {/* Draw dot */}
              {config.cl_crosshairdot === '1' ?
                <Rect
                  x={x - (crosshairWidth / 2)}
                  y={y - (crosshairWidth / 2)}
                  width={crosshairWidth}
                  height={crosshairWidth}
                  fill={getPreviewColor(config)}
                />
              : undefined}

              {/* Draw crosshair */}
              <Rect
                x={x + ((crosshairWidth / 2) + crosshairGap)}
                y={y - (crosshairWidth / 2)}
                width={crosshairLength}
                height={crosshairWidth}
                fill={getPreviewColor(config)}
              />
              <Rect
                x={(x - ((crosshairLength + (crosshairWidth / 2)) + crosshairGap))}
                y={y - (crosshairWidth / 2)}
                width={crosshairLength}
                height={crosshairWidth}
                fill={getPreviewColor(config)}
              />
              <Rect
                x={x - (crosshairWidth / 2)}
                y={y - ((crosshairLength + (crosshairWidth / 2)) + crosshairGap)}
                width={crosshairWidth}
                height={crosshairLength}
                fill={getPreviewColor(config)}
              />
              <Rect
                x={x - (crosshairWidth / 2)}
                y={y + ((crosshairWidth / 2) + crosshairGap)}
                width={crosshairWidth}
                height={crosshairLength}
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
