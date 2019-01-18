import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { withWalkthroughContext } from './WalkthroughContext';

import styles from './WalkthroughPin.module.styl';

class WalkthroughPin extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    active: PropTypes.string,

    enabled: PropTypes.bool.isRequired,
    settings: PropTypes.shape({
      order: PropTypes.number,
      orientation: PropTypes.string,
      hint: PropTypes.string,
    }).isRequired,

    onActiveChange: PropTypes.func.isRequired,
    onTogglePresence: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    active: null,
  };

  componentDidMount() {
    const { settings, onTogglePresence, id } = this.props;
    if (settings[id]) {
      onTogglePresence(id, true);
    }
  }

  componentWillUnmount() {
    const { settings, onTogglePresence, id } = this.props;
    if (settings[id]) {
      onTogglePresence(id, false);
    }
  }

  handleClick = evt => {
    evt.preventDefault();

    const { id, onActiveChange } = this.props;
    onActiveChange(id);
  };

  render() {
    const { className, id, settings, enabled, active } = this.props;
    if (!enabled || !settings[id] || active) {
      return null;
    }
    return (
      <button onClick={this.handleClick} className={cn(styles.pin, className)}>
        <div className={styles.inner} />
      </button>
    );
  }
}

export default withWalkthroughContext(WalkthroughPin);
