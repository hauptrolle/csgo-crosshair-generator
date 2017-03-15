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
  notificationText: string,
  notificationIsVisible: boolean,
};

const getFormattedConfig = config => Object.keys(config).map(key => `${key} "${config[key]}"\n`).join('');
const getConsoleConfig = config => Object.keys(config).map(key => `${key} "${config[key]}"`).join(';');

const copyUrl = (text, cb) => {
  copy(window.location.href);
  cb(text);
};

const copyConfig = (notification, value, cb) => {
  copy(value);
  cb(notification);
};

const App = ({
  config,
  setConfigAction,
  setNotificationAction,
  clearNotificationAction,
  notificationText,
  notificationIsVisible,
  activeColor,
  loadPresetAction,
}: Props) => (
  <div className="app">

    <Notification
      isActive={notificationIsVisible}
      message={notificationText}
      dismissAfter={1500}
      onDismiss={clearNotificationAction}
      onClick={clearNotificationAction}
    />

    <div className="header">
      <div className="header-inner">
        <div>
          <span>CS:GO</span> Crosshair Generator
        </div>
        <div className="button-wrapper">
          <button
            className="button secondary"
            onClick={() => copyUrl('Share Url copied', setNotificationAction)}
          >
              Share Crosshair
          </button>

          <button
            className="button"
            onClick={() => copyConfig('Config copied', getFormattedConfig(config), setNotificationAction)}
          >
              Copy for Config
          </button>

          <button
            className="button"
            onClick={() => copyConfig('Config copied', getConsoleConfig(config), setNotificationAction)}
          >
              Copy for Console
          </button>
        </div>
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
            value={parseFloat(config.cl_crosshairthickness)}
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
  notificationText: state.notification.message,
  notificationIsVisible: state.notification.visible,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setConfigAction: setConfig,
  loadPresetAction: loadPreset,
  setNotificationAction: setNotification,
  clearNotificationAction: clearNotification,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
