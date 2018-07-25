// @flow
import React, { forwardRef } from 'react';

import { ServicesContext } from '../components/ServiceProvider';

const withServices = Component =>
  forwardRef((props, ref) => (
    <ServicesContext.Consumer>
      {services => <Component {...props} services={services} ref={ref} />}
    </ServicesContext.Consumer>
  ));

export default withServices;
