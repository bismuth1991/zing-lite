import { RECEIVE_QUERY_DATA, CLEAR_SEARCH_RESULTS } from '../actions/search_bar_actions';

const initialState = {
  songIds: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_DATA:
      return {
        ...state,
        songIds: action.payload.data.searchResults.songIds,
      };
    case CLEAR_SEARCH_RESULTS:
      return initialState;
    default:
      return state;
  }
};

export default searchResultsReducer;
