import { combineReducers } from 'redux';

import loadingReducer from './ui_loading_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
});

export default uiReducer;
