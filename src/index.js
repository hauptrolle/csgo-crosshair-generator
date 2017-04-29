import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';

import App from './App';
import reducers from './ducks';

const history = createHistory();

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
  colorHeader: '#2f303c',
};

/*eslint-disable */
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color: #fff;
    background: #23242d;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  .grid {
    display: flex;
    margin-bottom: 20px;
  }

  .col-50 {
    flex: 1 0 50%;
  }

  .col-50:first-child {
    padding-right: 10px;
  }

  .col-50:last-child {
    padding-left: 10px;
  }

  .content {
    width: 1100px;
    margin: 0 auto 50px auto;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
/*eslint-enable */

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
