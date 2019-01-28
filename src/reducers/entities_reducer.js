import { combineReducers } from 'redux';

import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import userPlaylistsReducer from './user_playlists_reducer';

const entitiesReducer = combineReducers({
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  userPlaylists: userPlaylistsReducer,
});

export default entitiesReducer;
