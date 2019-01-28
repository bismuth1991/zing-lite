import React from 'react';
import { string, number, arrayOf, func } from 'prop-types';

class PlaylistForm extends React.Component {
  constructor() {
    super();

    this.state = {
      newName: '',
    };

    this.handleNew = this.handleNew.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  makePlaylistData() {
    const { newName } = this.state;
    const { userId, songIds } = this.props;

    return {
      playlist: {
        name: newName,
        user_id: userId,
        song_ids: songIds,
      },
    };
  }

  handleNew() {
    const { createPlaylist } = this.props;
    createPlaylist(this.makePlaylistData());

    this.setState({ newName: '' });
  }

  handleEdit() {
    const { playlistId, editPlaylist } = this.props;
    editPlaylist(playlistId, this.makePlaylistData());

    this.setState({ newName: '' });
  }

  handleChange(e) {
    this.setState({
      newName: e.target.value,
    });
  }

  render() {
    const { playlistName } = this.props;
    const { newName } = this.state;

    return (
      <form className="PlaylistForm" onSubmit={e => e.preventDefault()}>
        <input
          className="PlaylistName"
          type="text"
          placeholder="Name this playlist..."
          value={playlistName || newName}
          onChange={this.handleChange}
        />

        <div className="Buttons">
          {!playlistName
            ? (
              <button type="button" onClick={this.handleSave}>
                <h6>Save/Edit</h6>
              </button>
            ) : null}

          <button type="button" onClick={this.handleNew}>
            <h6>Create New</h6>
          </button>
        </div>
      </form>
    );
  }
}

PlaylistForm.defaultProps = {
  userId: null,
  playlistId: undefined,
  playlistName: undefined,
};

PlaylistForm.propTypes = {
  userId: string,
  songIds: arrayOf(number).isRequired,
  playlistId: number,
  playlistName: string,
  createPlaylist: func.isRequired,
  editPlaylist: func.isRequired,
};

export default PlaylistForm;
