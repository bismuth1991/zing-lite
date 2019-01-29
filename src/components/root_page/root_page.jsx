import React from 'react';
import { func, number } from 'prop-types';
import Redirect from 'react-router-dom/Redirect';


class RootPage extends React.Component {
  constructor() {
    super();

    this.state = ({
      hasFetchedPlaylist: false,
    });
  }

  componentDidMount() {
    const { fetchSomeSongs, fetchUserPlaylists, userId } = this.props;
    const { hasFetchedPlaylist } = this.state;

    fetchSomeSongs(0);

    if (userId && !hasFetchedPlaylist) {
      fetchUserPlaylists(userId);
      this.setState({ hasFetchedPlaylist: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { fetchUserPlaylists, userId } = nextProps;
    const { hasFetchedPlaylist } = this.state;

    if (userId && !hasFetchedPlaylist) {
      fetchUserPlaylists(userId);
      this.setState({ hasFetchedPlaylist: true });
    }
  }

  render() {
    return <Redirect to="/home" />;
  }
}

RootPage.defaultProps = {
  userId: null,
};

RootPage.propTypes = {
  userId: number,
  fetchSomeSongs: func.isRequired,
  fetchUserPlaylists: func.isRequired,
};

export default RootPage;
