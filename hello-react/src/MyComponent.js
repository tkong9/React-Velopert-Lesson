import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hi. My name is {name}. <br />
        Children value is {children}. <br />
        My favoriteNumber is {favoriteNumber}.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'default name'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
