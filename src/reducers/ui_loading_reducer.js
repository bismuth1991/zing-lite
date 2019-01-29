import { RECEIVE_SONGS } from '../actions/song_actions';

const initialState = {
  rootPageLoading: true,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        rootPageLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
