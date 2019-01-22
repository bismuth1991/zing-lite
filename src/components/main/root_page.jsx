import React from 'react';
import { func } from 'prop-types';

import AudioPlayerContainer from '../audio_player/audio_player_container';

class RootPage extends React.Component {
  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    fetchSomeSongs(0);
  }

  render() {
    return (
    <>
      <AudioPlayerContainer />
    </>
    );
  }
}

RootPage.propTypes = {
  fetchSomeSongs: func.isRequired,
};

export default RootPage;
