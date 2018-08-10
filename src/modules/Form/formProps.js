// @flow
import PropTypes from 'prop-types';

import moduleProps from '../Module/moduleProps';

export default PropTypes.shape({
  modules: PropTypes.arrayOf(moduleProps),
});
