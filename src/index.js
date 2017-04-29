import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import reducers from './ducks';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)),
);

const theme = {
  primary: '#ffaa01',
  error: '#e74c3c',
  success: '#2ecc71',
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
