import React from 'react';
import { func, shape, string } from 'prop-types';
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

Modal.defaultProps = {
  modal: null,
};

Modal.propTypes = {
  modal: shape({
    type: string.isRequired,
    content: string,
  }),
  closeModal: func.isRequired,
};

export default Modal;
