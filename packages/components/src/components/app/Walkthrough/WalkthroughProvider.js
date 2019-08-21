// eslint-disable-next-line max-classes-per-file
import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';

import windowResize from '../../hoc/windowResize';

import WalkthroughContext from './WalkthroughContext';
import Portal from '../../Portal';

import { getPositionById } from './positioning';

import Hint from './Hint/Hint';
import Overlay from './Overlay';

import styles from './WalkthroughProvider.module.styl';

// eslint-disable-next-line no-unused-vars
function DocumentClick({ onClick }) {
  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [onClick]);
  return null;
}

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

  handleHideActive = () => {
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

  handleToggle = evt => {
    if (evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }
    this.setState(({ enabled }) => ({ enabled: !enabled }));
  };

  handleHide = () => {
    this.setState({ enabled: false });
  };

  handleResize = () => {
    const { settings } = this.props;
    const { active, enabled } = this.state;
    if (enabled) {
      this.setState({
        screen: { width: window.innerWidth, height: window.innerHeight },
      });
      if (active) {
        const position = getPositionById(settings[active].htmlId);
        this.setState({ position });
      }
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
      onToggle: this.handleToggle,
    };

    return (
      <WalkthroughContext.Provider value={value}>
        {children}
        {enabled && !active && <DocumentClick onClick={this.handleHide} />}
        {active && (
          <Portal className={styles.portal}>
            <Overlay
              position={position}
              screen={screen}
              onClick={this.handleHideActive}
            />
            <Hint
              settings={settings}
              active={active}
              position={position}
              screen={screen}
              presence={presence}
              onActiveChange={this.handleActiveChange}
              onHide={this.handleHideActive}
            />
          </Portal>
        )}
      </WalkthroughContext.Provider>
    );
  }
}

export default windowResize(WalkthroughProvider);
