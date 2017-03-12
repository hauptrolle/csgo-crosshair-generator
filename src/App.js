import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './app.css';
import { setConfig } from './ducks/config';

import Slider from './components/Slider';
import CrosshairColor from './components/CrosshairColor';
import CustomColor from './components/CustomColor';

const propTypes = {
  config: PropTypes.object.isRequired,
  setConfigAction: PropTypes.func.isRequired,
  activeColor: PropTypes.string.isRequired,
};

const App = ({ config, setConfigAction, activeColor }) => (
  <div className="app">
    <h1>CSGO Crosshair Generator</h1>
    <Slider
      name="cl_crosshairalpha"
      label="Alpha"
      onChange={setConfigAction}
      min={0}
      max={255}
      defaultValue={parseInt(config.cl_crosshairalpha, 10)}
    />

    <Slider
      name="cl_crosshairthickness"
      label="Thickness"
      onChange={setConfigAction}
      min={0}
      max={100}
      step={0.5}
      defaultValue={parseInt(config.cl_crosshairthickness, 10)}
    />

    <Slider
      name="cl_crosshairsize"
      label="Size"
      onChange={setConfigAction}
      min={0}
      max={100}
      defaultValue={parseInt(config.cl_crosshairsize, 10)}
    />

    <Slider
      name="cl_fixedcrosshairgap"
      label="Gap"
      onChange={setConfigAction}
      min={-100}
      max={100}
      defaultValue={parseInt(config.cl_fixedcrosshairgap, 10)}
    />

    <CrosshairColor
      setConfigAction={setConfigAction}
      activeColor={activeColor}
    />

    {activeColor === '5' &&
      <CustomColor
        config={config}
        onChange={setConfigAction}
      />
    }

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
}, dispatch);

App.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
