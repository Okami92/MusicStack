import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderInput from '../form-field';
import * as actions from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = ({ email, password }) => {
      this.props.signinUser({ email, password });
    };
  }

  renderAlert() {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> {this.props.errorMessage}
      </div>
    );
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
        {this.props.errorMessage ? this.renderAlert() : null}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signinUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

Signin.defaultProps = {
  errorMessage: null,
};


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(reduxForm({ form: 'signin' })(Signin));
