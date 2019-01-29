import { combineReducers } from 'redux';

import loadingReducer from './ui_loading_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
});

export default uiReducer;
