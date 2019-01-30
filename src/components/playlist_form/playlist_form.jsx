import React from 'react';
import { string, number, arrayOf, func } from 'prop-types';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: `${props.playlistName || ''}`,
    };

    this.handleNew = this.handleNew.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { playlistName } = nextProps;
    this.setState({ newName: `${playlistName || ''}` });
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
  }

  handleEdit() {
    const { playlistId, editPlaylist } = this.props;
    editPlaylist(playlistId, this.makePlaylistData());
  }

  handleChange(e) {
    this.setState({
      newName: e.target.value,
    });
  }

  render() {
    const { playlistName, userId } = this.props;
    const { newName } = this.state;

    if (!userId) return null;

    return (
      <form className="Input-Form" onSubmit={e => e.preventDefault()}>
        <input
          className="Input-Form__Input"
          type="text"
          placeholder="Name this playlist..."
          value={newName}
          onChange={this.handleChange}
        />

        <div className="Input-Form__Buttons">
          {playlistName
            ? (
              <button type="button" onClick={this.handleEdit}>
                <h6>Save</h6>
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
  userId: number,
  songIds: arrayOf(number).isRequired,
  playlistId: number,
  playlistName: string,
  createPlaylist: func.isRequired,
  editPlaylist: func.isRequired,
};

export default PlaylistForm;
