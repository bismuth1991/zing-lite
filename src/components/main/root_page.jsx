import React from 'react';
import { func } from 'prop-types';


class RootPage extends React.Component {
  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    fetchSomeSongs(0);
  }

  render() {
    return <></>;
  }
}

RootPage.propTypes = {
  fetchSomeSongs: func.isRequired,
};

export default RootPage;
