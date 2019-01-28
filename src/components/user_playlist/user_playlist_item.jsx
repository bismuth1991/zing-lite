import React from 'react';
import { string, func, number, arrayOf } from 'prop-types';

class UserPlaylistItem extends React.Component {
  constructor() {
    super();

    this.state = ({ newName: '' });

    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleChange(e) {
    this.setState({
      newName: e.target.value,
    });
  }

  handleRename() {
    const { userId, playlistId, songIds, editPlaylist } = this.props;
    const { newName } = this.state;

    const newPlaylist = {
      playlist: {
        name: newName,
        user_id: userId,
        song_ids: songIds,
      },
    };

    editPlaylist(playlistId, newPlaylist);

    this.setState({ newName: '' });
  }

  handlePlay() {
    const { play } = this.props;
    play();
  }

  handleDelete() {
    const { deleteUserPlaylist, playlistId } = this.props;
    deleteUserPlaylist(playlistId);
  }

  render() {
    const { playlistName } = this.props;
    const { newName } = this.state;

    return (
      <div>
        <button
          className="play"
          type="button"
          onClick={this.handlePlay}
        >
          <i className="fas fa-play" />
        </button>

        <input
          className="playlist-name"
          type="text"
          placeholder="Name this playlist..."
          value={playlistName || newName}
          onChange={this.handleChange}
        />

        <button
          className="rename"
          type="button"
          onClick={this.handleRename}
        >
          <h6>rename</h6>
        </button>

        <button
          className="delete"
          type="button"
          onClick={this.handleDelete}
        >
          <h6>delete</h6>
        </button>
      </div>
    );
  }
}

UserPlaylistItem.propTypes = {
  userId: number.isRequired,
  songIds: arrayOf(number).isRequired,
  playlistName: string.isRequired,
  playlistId: number.isRequired,
  play: func.isRequired,
  deleteUserPlaylist: func.isRequired,
  editPlaylist: func.isRequired,
};
