import React from 'react';
import { func } from 'prop-types';

const BackwardButton = (props) => {
  const { backward } = props;

  return (
    <button type="button" onClick={backward}>
      <i className="fas fa-step-backward" />
    </button>
  );
};

BackwardButton.propTypes = {
  backward: func.isRequired,
};

export default BackwardButton;
