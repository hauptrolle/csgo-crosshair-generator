import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import config from './config';
import notification from './notification';

export default combineReducers({
  config,
  notification,
  router: routerReducer,
});
