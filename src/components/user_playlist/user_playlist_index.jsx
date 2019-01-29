import React from 'react';
import { shape, string, number, arrayOf, func } from 'prop-types';
import UserPlaylistItem from './user_playlist_item';

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
    const { user, userPlaylists } = this.props;

    return (
      <>
        <h4 className="profile__playlist__header">
          <span>{`Hi, ${user.username}! Below are your personal playlists`}</span>
        </h4>

        <ul className="Row-List profile__playlist">
          {userPlaylists.map(playlist => (
            <li className="Row-List__Item" key={playlist.id}>
              <UserPlaylistItem
                {...playlist}
                userId={user.userId}
                handlePlay={this.handlePlay}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

UserPlaylistIndex.propTypes = {
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
