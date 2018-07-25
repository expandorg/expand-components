import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ServicesContext from './ServicesContext';

export default class ServiceProvider extends Component {
  static propTypes = {
    services: PropTypes.shape({
      resolve: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { children, services } = this.props;
    return (
      <ServicesContext.Provider value={services}>
        {children}
      </ServicesContext.Provider>
    );
  }
}
