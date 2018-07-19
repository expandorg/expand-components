// @flow
import PropTypes from 'prop-types';

export const fieldProps = {
  type: PropTypes.string,
  name: PropTypes.string,
};

export const taskFormProps = {
  description: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape(fieldProps)),
};
