import React from 'react';
import { bool } from 'prop-types';

const LoadIcon = ({ loading }) => (
  loading ? (
    <div className="load-icon" />
  ) : null
);

LoadIcon.propTypes = {
  loading: bool.isRequired,
};

export default LoadIcon;
