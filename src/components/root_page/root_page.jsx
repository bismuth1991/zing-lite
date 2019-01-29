import React from 'react';
import { func, number, bool } from 'prop-types';

import Redirect from 'react-router-dom/Redirect';
import LoadIcon from '../utils/loading_icon';


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
    const { loading } = this.props;

    return loading
      ? <LoadIcon loading={loading} />
      : <Redirect to="/home" />;
  }
}

RootPage.defaultProps = {
  userId: null,
};

RootPage.propTypes = {
  loading: bool.isRequired,
  userId: number,
  fetchSomeSongs: func.isRequired,
  fetchUserPlaylists: func.isRequired,
};

export default RootPage;
