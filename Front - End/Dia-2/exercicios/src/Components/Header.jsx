import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header key={'header'}>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;