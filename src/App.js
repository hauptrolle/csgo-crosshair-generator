// @flow

import React from 'react';
import copy from 'copy-to-clipboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Notification } from 'react-notification';

import './assets/css/app.css';
import { setConfig, loadPreset } from './ducks/config';
import { setNotification, clearNotification } from './ducks/notification';

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
  setNotificationAction: Function,
  clearNotificationAction: Function,
  activeColor: string,
  notification: string,
};

const copyUrl = (text, cb) => {
  copy(window.location.href);
  cb(text);
};

const App = ({
  config,
  setConfigAction,
  setNotificationAction,
  clearNotificationAction,
  notification,
  activeColor,
  loadPresetAction,
}: Props) => (
  <div className="app">

    <Notification
      isActive={!!notification}
      message={notification}
      dismissAfter={1500}
      onDismiss={clearNotificationAction}
      onClick={clearNotificationAction}
    />

    <div className="header">
      <div className="header-inner">
        <div>
          <span>CS:GO</span> Crosshair Generator
        </div>
        <button className="button" onClick={() => copyUrl('Share Url copied', setNotificationAction)}>
            Share Crosshair
        </button>
      </div>
    </div>

    <div className="content">
      <div className="toggle-wrapper">
        <Toggle
          name="cl_crosshairusealpha"
          label="Use Alpha"
          onClick={setConfigAction}
          value={config.cl_crosshairusealpha}
          isActive={config.cl_crosshairusealpha === '1'}
        />

        <Toggle
          name="cl_crosshair_outline_draw"
          label="Draw Outline"
          onClick={setConfigAction}
          value={config.cl_crosshair_outline_draw}
          isActive={config.cl_crosshair_outline_draw === '1'}
        />

        <Toggle
          name="cl_crosshairdot"
          label="Show Dot"
          onClick={setConfigAction}
          value={config.cl_crosshairdot}
          isActive={config.cl_crosshairdot === '1'}
        />
      </div>

      <div className="grid">
        <div className="col-50">
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
        </div>
        <div className="col-50">
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
        </div>
      </div>

      <CrosshairPreview config={config} />

      {/* Debugging */}
      <pre>
        {JSON.stringify(config, null, 2)}
      </pre>
    </div>
  </div>
  );

const mapStateToProps = state => ({
  config: state.config,
  activeColor: state.config.cl_crosshaircolor,
  notification: state.notification.message,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setConfigAction: setConfig,
  loadPresetAction: loadPreset,
  setNotificationAction: setNotification,
  clearNotificationAction: clearNotification,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
