import * as songApiUtil from '../utils/song_utils';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = payload => ({
  type: RECEIVE_SONGS,
  payload,
});

export const fetchSomeSongs = (offSet = 0) => dispatch => songApiUtil.fetchSomeSongs(offSet)
  .then(payload => dispatch(receiveSongs(payload)));
