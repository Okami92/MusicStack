import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import renderInput from '../form-field';

class Signin extends Component {
  constructor() {
    super();
    this.handleFormSubmit = ({ email, password }) => {
      console.log(email, password);
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field
          name="email"
          component={renderInput}
          type="text"
          labelName="Email"
        />

        <Field
          name="password"
          component={renderInput}
          type="text"
          labelName="Password"
        />

        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

Signin.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({ form: 'signin' })(Signin);
