import { RECEIVE_SONGS } from '../actions/song_actions';

const initialState = {
  homePageLoading: true,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        homePageLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
