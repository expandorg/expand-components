import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ServicesContext from './ServicesContext';
import ServiceLocator from './ServiceLocator';

export default class ServiceProvider extends Component {
  static propTypes = {
    services: PropTypes.instanceOf(ServiceLocator).isRequired,
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
