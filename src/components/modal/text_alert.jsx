import React from 'react';
import { string } from 'prop-types';

const TextAlert = ({ text }) => (
  <h4 className="modal__child__text">
    {text}
  </h4>
);

TextAlert.propTypes = {
  text: string.isRequired,
};

export default TextAlert;
