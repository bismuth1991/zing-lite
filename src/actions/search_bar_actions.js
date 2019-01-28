import { fetchDataByQuery } from '../utils/search_bar_utils';

export const RECEIVE_QUERY_DATA = 'RECEIVE_QUERY_DATA';

export const receiveQueryData = payload => ({
  type: RECEIVE_QUERY_DATA,
  payload,
});

export const fetchQueryData = query => dispatch => fetchDataByQuery(query)
  .then(payload => dispatch(receiveQueryData(payload)));
