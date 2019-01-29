import React from 'react';
import { Link } from 'react-router-dom';
import { func, oneOf, string, arrayOf } from 'prop-types';

class SessionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { clearSessionErrors, errors } = this.props;
    if (errors.length !== 0) clearSessionErrors();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { processForm } = this.props;
    const { username, password } = this.state;

    const userData = { user: { username, password } };
    processForm(userData);

    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    const { formType, errors } = this.props;
    const { username, password } = this.state;

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <input
          className="session-form__input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.update('username')}
        />
        <br />
        <input
          className="session-form__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.update('password')}
        />

        <ul className="session-form__errors">
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
        <br />

        <button className="session-form__button" type="submit">{formType}</button>
        <button className="session-form__button" type="submit">DEMO</button>

        {formType === 'LOG IN'
          ? (
            <p className="session-form__text">
              {'Don\'t have an account? '}
              <Link className="session-form__link" to="/profile/signup">Signup</Link>
            </p>
          ) : (
            <p>
              {'Already have an account? '}
              <Link className="session-form__link" to="/profile/login">Login</Link>
            </p>
          )}
      </form>
    );
  }
}

SessionForm.propTypes = {
  formType: oneOf(['LOG IN', 'SIGN UP']).isRequired,
  errors: arrayOf(string).isRequired,
  processForm: func.isRequired,
  clearSessionErrors: func.isRequired,
};

export default SessionForm;
