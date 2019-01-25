import React from 'react';
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

  update(field) {
    return e => this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { processForm } = this.props;
    const { username, password } = this.state;

    const user = { username, password };
    processForm(user);

    this.setState({
      username: '',
      password: '',
    });
  }

  renderErrors() {
    const { errors } = this.props;

    return (
      <ul>
        {errors.map(error => (
          <li key={Date.now()}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const { username, password } = this.state;

    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
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
          <br />
          <button type="submit">{formType}</button>
        </form>
      </div>
    );
  }
}

SessionForm.propTypes = {
  formType: oneOf(['LOG IN', 'SIGN UP']).isRequired,
  errors: arrayOf(string).isRequired,
  processForm: func.isRequired,
};

export default SessionForm;
