import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './app.css';
import { setConfig } from './ducks/config';
import Slider from './components/Slider';
import CrosshairColor from './components/CrosshairColor';

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
      defaultValue={200}
    />

    <CrosshairColor
      setConfigAction={setConfigAction}
      activeColor={activeColor}
    />

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
