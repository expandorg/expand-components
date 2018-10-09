// @flow
import PropTypes from 'prop-types';

import moduleProps from '../Module/moduleProps';

export default PropTypes.shape({
  report: PropTypes.bool,
  modules: PropTypes.arrayOf(moduleProps),
});
