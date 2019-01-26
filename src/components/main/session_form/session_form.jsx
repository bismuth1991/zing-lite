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
    return e => this.setState({
      [field]: e.target.value,
    });
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
      <form className="SessionForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.update('username')}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.update('password')}
        />

        <ul className="Errors">
          {errors.map(error => (
            <li key={Date.now()}>{error}</li>
          ))}
        </ul>

        <button type="submit">{formType}</button>
        <button type="submit">DEMO</button>


        {formType === 'LOG IN'
          ? (
            <p>
              {'Don\'t have an account? '}
              <Link to="/profile/signup">Signup</Link>
            </p>
          ) : null}
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
