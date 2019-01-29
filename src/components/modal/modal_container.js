import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import Modal from './modal';

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
