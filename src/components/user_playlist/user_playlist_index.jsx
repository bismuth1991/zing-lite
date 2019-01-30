import React from 'react';
import { shape, string, number, arrayOf, func, bool } from 'prop-types';
import UserPlaylistItem from './user_playlist_item';
import LoadIcon from '../utils/loading_icon';

class UserPlaylistIndex extends React.Component {
  constructor() {
    super();

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(songIds, playlistId) {
    const { play } = this.props;
    return () => {
      play(songIds, playlistId);
      window.location.hash = '/playlist';
    };
  }

  render() {
    const { user, userPlaylists, loading } = this.props;

    return !loading ? (
      <>
        <h4 className="profile__playlist__header">
          <span>{`Welcome, ${user.username}! What are you in the mood for today?`}</span>
        </h4>

        <ul className="Row-List profile__playlist">
          {userPlaylists.map(playlist => (
            <li className="Row-List__Item" key={playlist.id}>
              <UserPlaylistItem
                {...playlist}
                userId={user.userId}
                handlePlay={this.handlePlay}
                loading
              />
            </li>
          ))}
        </ul>
      </>
    ) : <LoadIcon loading={loading} />;
  }
}

UserPlaylistIndex.propTypes = {
  loading: bool.isRequired,
  userPlaylists: arrayOf(shape({
    id: number,
    name: string,
    songIds: arrayOf(number),
  })).isRequired,
  user: shape({
    username: string,
    userId: number,
  }).isRequired,
  play: func.isRequired,
};

export default UserPlaylistIndex;
