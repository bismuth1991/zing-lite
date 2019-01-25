import { connect } from 'react-redux';

import { signup, clearSessionErrors } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'SIGN UP',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);

export default SignupFormContainer;
