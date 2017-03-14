import { combineReducers } from 'redux';

import config from './config';
import notification from './notification';

export default combineReducers({
  config,
  notification,
});
