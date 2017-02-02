import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <h3>This is your dashboard!</h3>
        {this.props.message}
      </div>
    );
  }
}


Dashboard.propTypes = {
  fetchMessage: PropTypes.func,
  message: PropTypes.string,
};

Dashboard.defaultProps = {
  message: undefined,
  fetchMessage: undefined,
};

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Dashboard);

