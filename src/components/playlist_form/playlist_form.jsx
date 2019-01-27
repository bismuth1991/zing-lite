import React from 'react';
import { string } from 'prop-types';

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

  render() {
    const { playlistName } = this.props;
    const { newName } = this.state;

    return (
      <form className="PlaylistForm" onSumbit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name this playlist..."
          value={playlistName || newName}
          onChange={this.handleChange}
        />

        <button type="button" onClick={this.handleNew}>Create New</button>
        {playlistName ? <button type="button" onClick={this.handleSave}>Save</button> : null}
      </form>
    );
  }
}


PlaylistForm.defaultProps = {
  playlistName: undefined,
};

PlaylistForm.propTypes = {
  playlistName: string,
};

export default PlaylistForm;
