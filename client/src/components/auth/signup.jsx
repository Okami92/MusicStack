import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderInput from '../form-field';
import * as actions from '../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = (formProps) => {
      this.props.signupUser(formProps);
    };
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! {this.props.errorMessage}</strong>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field
          name="email"
          id="email"
          component={renderInput}
          type="text"
          labelName="Email"
        />

        <Field
          name="password"
          id="password"
          component={renderInput}
          type="password"
          labelName="Password"
        />

        <Field
          name="passwordConfirm"
          id="password-confirm"
          component={renderInput}
          type="password"
          labelName="Confirm password"
        />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

Signup.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  signupUser: React.PropTypes.func.isRequired,
  errorMessage: React.PropTypes.string,
};

Signup.defaultProps = {
  errorMessage: undefined,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signup',
  validate,
})(Signup));
