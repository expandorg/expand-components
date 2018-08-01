// @flow
import PropTypes from 'prop-types';

import fieldProps from '../Field/fieldProps';

export default PropTypes.shape({
  description: PropTypes.string,
  submit: fieldProps,
  fields: PropTypes.arrayOf(fieldProps),
});
