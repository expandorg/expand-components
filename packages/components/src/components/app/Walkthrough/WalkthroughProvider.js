import React, { Component } from 'react';
import PropTypes from 'prop-types';

import windowResize from '../../hoc/windowResize';

import WalkthroughContext from './WalkthroughContext';
import Portal from '../../Portal';

import { getPositionById } from './positioning';

import Hint from './Hint/Hint';
import Overlay from './Overlay';

import styles from './WalkthroughProvider.module.styl';

class WalkthroughProvider extends Component {
  static propTypes = {
    settings: PropTypes.shape({
      order: PropTypes.number,
      orientation: PropTypes.string,
      hint: PropTypes.string,
    }).isRequired,
  };

  state = {
    active: null,
    position: null,
    presence: [],
    enabled: false,
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };

  handleActiveChange = active => {
    const { settings } = this.props;
    this.setState({
      active,
      position: getPositionById(settings[active].htmlId),
    });
  };

  handlePositionChange = position => {
    this.setState({
      position,
    });
  };

  handleHide = () => {
    this.setState({
      active: null,
      position: null,
    });
  };

  handleTogglePresence = (id, add) => {
    this.setState(({ presence }) => ({
      presence: add ? [...presence, id] : presence.filter(p => p !== id),
    }));
  };

  handleToggleWalkThrough = () => {
    const { enabled } = this.state;
    this.setState({
      enabled: !enabled,
    });
  };

  handleResize = () => {
    const { settings } = this.props;
    const { active, enabled } = this.state;
    if (enabled && active) {
      const position = getPositionById(settings[active].htmlId);
      this.setState({
        screen: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        position,
      });
    }
  };

  render() {
    const { children, settings } = this.props;
    const { active, position, presence, enabled, screen } = this.state;

    const value = {
      settings,
      active,
      enabled,
      position,
      onActiveChange: this.handleActiveChange,
      onTogglePresence: this.handleTogglePresence,
      onToggle: this.handleToggleWalkThrough,
    };

    return (
      <WalkthroughContext.Provider value={value}>
        {children}
        {active && (
          <Portal className={styles.portal}>
            <Overlay position={position} screen={screen} />
            <Hint
              settings={settings}
              active={active}
              position={position}
              screen={screen}
              presence={presence}
              onActiveChange={this.handleActiveChange}
              onHide={this.handleHide}
            />
          </Portal>
        )}
      </WalkthroughContext.Provider>
    );
  }
}

export default windowResize(WalkthroughProvider);
