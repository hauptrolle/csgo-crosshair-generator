// @flow

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Layer, Rect, Stage, Group } from 'react-konva';

import styles from './preview.css';
import { getPreviewColor } from '../../helpers/color';

type Props = {
  config: Object,
};

type State = {
  follow: boolean,
  background: string,
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
  handleBackgroundChange: Function;

  constructor(props: Props) {
    super(props);

    this.handleLayerClick = this.handleLayerClick.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);

    this.state = {
      follow: false,
      background: 'dust2',
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    };
  }

  /**
   * Update the state to allow the crosshair to follow the cursor
   */
  handleLayerClick() {
    this.setState({
      follow: !this.state.follow,
    });
  }

/**
 * Update the state with the current cursor position
 * Thanks to: http://www.jacklmoore.com/notes/mouse-position/
 * @param {object} e
 */
  handleMousemove(e: Object) {
    if (this.state.follow) {
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

  /**
   * Update the state with the current selected background
   * @param {string} background
   */
  handleBackgroundChange(background : string) {
    return this.setState({ background });
  }

  /**
   * Renders the crosshair canvas
   * Thanks to https://github.com/kstdnr/csgocfgr_client/blob/master/app/components/crosshair-canvas.js
   * for the calculations
   */
  render() {
    const { config } = this.props;
    const { x, y } = this.state;

    let crosshairLength = parseInt(config.cl_crosshairsize, 10) * 2;
    const crosshairWidth = parseFloat(config.cl_crosshairthickness) * 2;
    const crosshairGap = parseInt(config.cl_fixedcrosshairgap, 10) + 4;
    const outlineThickness = parseInt(config.cl_crosshair_outline, 10);

    if (parseInt(config.cl_crosshairsize, 10) > 2) {
      crosshairLength = parseInt(crosshairLength, 10) + 1;
    }

    return (
      <div styleName="root">
        <div styleName="toggles">
          <button styleName={this.state.background === 'dust2' ? 'active' : ''} onClick={() => this.handleBackgroundChange('dust2')}>de_dust_2</button>
          <button styleName={this.state.background === 'nuke' ? 'active' : ''} onClick={() => this.handleBackgroundChange('nuke')}>de_nuke</button>
          <button styleName={this.state.background === 'cache' ? 'active' : ''} onClick={() => this.handleBackgroundChange('cache')}>de_cache</button>
        </div>

        <div
          styleName={`canvas-wrapper ${this.state.background}`}
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
      </div>
    );
  }
}

export default CSSModules(CrosshairPreview, styles, { allowMultiple: true });
