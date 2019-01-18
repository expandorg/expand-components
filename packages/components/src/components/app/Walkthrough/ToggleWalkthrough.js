import { Component } from 'react';
import PropTypes from 'prop-types';

import { withWalkthroughContext } from './WalkthroughContext';

class ToggleWalkthrough extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired,
  };

  render() {
    const { children, onToggle, enabled } = this.props;
    return children({ onToggle, enabled });
  }
}

export default withWalkthroughContext(ToggleWalkthrough);
