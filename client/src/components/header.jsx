import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    }
    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign in</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Music Stack</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
};

Header.defaultProps = {
  authenticated: undefined,
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);
