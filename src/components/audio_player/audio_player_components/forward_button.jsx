import React from 'react';
import { func } from 'prop-types';

const ForwardButton = (props) => {
  const { forward } = props;

  return (
    <button type="button" onClick={forward}>
      <i className="fas fa-step-forward" />
    </button>
  );
};

ForwardButton.propTypes = {
  forward: func.isRequired,
};

export default ForwardButton;
