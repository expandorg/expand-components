// @flow
import PropTypes from 'prop-types';

export default PropTypes.shape({
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modules: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
});
