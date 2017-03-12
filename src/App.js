import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './app.css';

const propTypes = {
  config: PropTypes.object.isRequired,
};

const App = ({ config }) => (
  <div className="app">
    <h1>CSGO Crosshair Generator</h1>
    <pre>
      {JSON.stringify(config, null, 2)}
    </pre>
  </div>
);

const mapStateToProps = state => ({
  config: state.config,
});

App.propTypes = propTypes;
export default connect(mapStateToProps, undefined)(App);
