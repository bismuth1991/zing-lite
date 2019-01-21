import React from 'react';
import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';

class RootPage extends React.Component {
  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    fetchSomeSongs(0);
  }

  render() {
    return <></>;
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
});

export default connect(
  null,
  mapDispatchtoProps,
)(RootPage);
