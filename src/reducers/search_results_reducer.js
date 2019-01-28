import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';

const initialState = {
  songIds: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_DATA: {
      return {
        songIds: action.payload.data.searchResults.songIds,
      };
    }
    default:
      return state;
  }
};

export default searchResultsReducer;
