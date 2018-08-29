import React, { forwardRef } from 'react';

import FormContext from './FormContext';

const withFormData = Component =>
  forwardRef((props, ref) => (
    <FormContext.Consumer>
      {formData => <Component {...props} formData={formData} ref={ref} />}
    </FormContext.Consumer>
  ));

export default withFormData;
