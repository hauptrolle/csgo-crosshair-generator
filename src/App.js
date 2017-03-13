// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './assets/css/app.css';
import { setConfig, loadPreset } from './ducks/config';

import Slider from './components/Slider';
import Toggle from './components/Toggle';
import CrosshairColor from './components/CrosshairColor';
import CustomColor from './components/CustomColor';
import Presets from './components/Presets';
import CrosshairPreview from './components/CrosshairPreview';

type Props = {
  config: Object,
  setConfigAction: Function,
  loadPresetAction: Function,
  activeColor: string,
};

const App = ({ config, setConfigAction, activeColor, loadPresetAction }: Props) => (
  <div className="app">
    <h1>CSGO Crosshair Generator</h1>
    <Toggle
      name="cl_crosshairusealpha"
      label="Use Alpha"
      onClick={setConfigAction}
      value={config.cl_crosshairusealpha}
      isActive={config.cl_crosshairusealpha === '1'}
    />

    <Slider
      disabled={config.cl_crosshairusealpha === '0'}
      name="cl_crosshairalpha"
      label="Alpha"
      onChange={setConfigAction}
      min={0}
      max={255}
      value={parseInt(config.cl_crosshairalpha, 10)}
    />

    <Slider
      name="cl_crosshairthickness"
      label="Thickness"
      onChange={setConfigAction}
      min={0}
      max={100}
      step={0.5}
      value={parseInt(config.cl_crosshairthickness, 10)}
    />

    <Slider
      name="cl_crosshairsize"
      label="Size"
      onChange={setConfigAction}
      min={0}
      max={100}
      value={parseInt(config.cl_crosshairsize, 10)}
    />

    <Slider
      name="cl_fixedcrosshairgap"
      label="Gap"
      onChange={setConfigAction}
      min={-100}
      max={100}
      value={parseInt(config.cl_fixedcrosshairgap, 10)}
    />

    <Toggle
      name="cl_crosshair_outline_draw"
      label="Draw Outline"
      onClick={setConfigAction}
      value={config.cl_crosshair_outline_draw}
      isActive={config.cl_crosshair_outline_draw === '1'}
    />

    <Slider
      disabled={config.cl_crosshair_outline_draw === '0'}
      name="cl_crosshair_outline"
      label="Outline"
      onChange={setConfigAction}
      min={0}
      max={3}
      dots
      value={parseInt(config.cl_crosshair_outline, 10)}
    />

    <Toggle
      name="cl_crosshairdot"
      label="Dot"
      onClick={setConfigAction}
      value={config.cl_crosshairdot}
      isActive={config.cl_crosshairdot === '1'}
    />

    <CrosshairColor
      setConfigAction={setConfigAction}
      activeColor={activeColor}
    />

    <CustomColor
      config={config}
      onChange={setConfigAction}
      disabled={activeColor !== '5'}
    />

    <Presets
      onClick={loadPresetAction}
    />

    <CrosshairPreview config={config} />

    {/* Debugging */}
    <pre>
      {JSON.stringify(config, null, 2)}
    </pre>
  </div>
);

const mapStateToProps = state => ({
  config: state.config,
  activeColor: state.config.cl_crosshaircolor,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setConfigAction: setConfig,
  loadPresetAction: loadPreset,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
