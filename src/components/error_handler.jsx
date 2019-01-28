import React from 'react';
import { Redirect } from 'react-router-dom';
import { element } from 'prop-types';

class ErrorHandler extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <Redirect to="/home" />;
    }

    const { children } = this.props;
    return children;
  }
}

ErrorHandler.propTypes = {
  children: element.isRequired,
};

export default ErrorHandler;
