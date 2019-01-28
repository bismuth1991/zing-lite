import fetchDataByQuery from '../util/search_bar_util';

export const RECEIVE_QUERY_DATA = 'RECEIVE_QUERY_DATA';

const receiveQueryData = data => ({
  type: RECEIVE_QUERY_DATA,
  data,
});

export const fetchQueryData = query => dispatch => fetchDataByQuery(query)
  .then(data => dispatch(receiveQueryData(data)));
