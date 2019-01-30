import React from 'react';
import { string } from 'prop-types';

class SpinningDisc extends React.Component {
  constructor() {
    super();

    this.state = { isSpinning: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isSpinning } = this.state;
    this.setState({ isSpinning: !isSpinning });
  }

  render() {
    const { album, coverImage } = this.props;
    const { isSpinning } = this.state;

    return (
      <figure
        className={`SpinningDisc SpinningDisc--${isSpinning && 'spin'}`}
        role="presentation"
        onClick={this.handleClick}
      >
        <img src={coverImage} alt={album} />
      </figure>
    );
  }
}

SpinningDisc.propTypes = {
  album: string.isRequired,
  coverImage: string.isRequired,
};

export default SpinningDisc;
