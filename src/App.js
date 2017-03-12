import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './app.css';
import reducers from './ducks';

const store = createStore(
  reducers,
  composeWithDevTools(),
);

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>CSGO Crosshair Generator</h1>
    </div>
  </Provider>
);

export default App;
