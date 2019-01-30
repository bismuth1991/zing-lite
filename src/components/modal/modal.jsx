import React from 'react';
import { bool, func } from 'prop-types';
import TextAlert from './text_alert';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.type) {
    case 'TEXT_ALERT':
      component = <TextAlert text={modal.content} />;
      break;
    default:
      return null;
  }

  return (
    <div
      className="Main modal__background"
      role="presentation"
      onClick={closeModal}
      onWheel={closeModal}
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
