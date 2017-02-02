import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

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
  fetchMessage: React.PropTypes.func.isRequired,
  message: React.PropTypes.string,
};

Dashboard.defaultProps = {
  message: undefined,
};

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Dashboard);

