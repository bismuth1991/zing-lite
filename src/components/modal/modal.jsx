import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

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

const mapStateToProps = ({ ui: { modal } }) => ({
  modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

export default ModalContainer;
