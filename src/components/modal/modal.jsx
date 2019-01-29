import React from 'react';
import { bool, func } from 'prop-types';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'TEXT_ALEART':
      break;
    default:
      return null;
  }

  return (
    <div
      className="modal__background"
      role="presentation"
      onClick={closeModal}
      onScroll={closeModal}
    >
      <div className="modal__child" role="presentation" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

Modal.propTypes = {
  modal: bool.isRequired,
  closeModal: func.isRequired,
};

export default Modal;
