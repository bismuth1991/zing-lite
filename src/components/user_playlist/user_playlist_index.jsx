import React from 'react';
import { shape, string, number, arrayOf, func } from 'prop-types';
import UserPlaylistItem from './user_playlist_item';

class UserPlaylistIndex extends React.Component {
  componentDidMount() {
    const { fetchUserPlaylists } = this.props;
    fetchUserPlaylists();
  }

  render() {
    const { user, userPlaylists } = this.props;

    if (userPlaylists.length === 0) return null;

    return (
      <div className="Profile">
        <h2 className="UserPlaylistHeader">
          {`Hi, ${user.username}, below are your personal playlists`}
        </h2>

        <ul className="UserPlaylistIndex">
          {userPlaylists.map(playlist => (
            <li className="UserPlaylistItem" key={playlist.id}>
              <UserPlaylistItem
                playlistName={playlist.name}
                playlistId={playlist.id}
                userId={user.userId}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

UserPlaylistIndex.propTypes = {
  userPlaylists: shape({
    id: number,
    name: string,
    songIds: arrayOf(number),
  }).isRequired,
  user: shape({
    username: string,
    userId: number,
  }).isRequired,
  fetchUserPlaylists: func.isRequired,
};

export default UserPlaylistIndex;
