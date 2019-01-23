import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Transition, animated } from 'react-spring';

import './Collapsable.styl';

const transitions = {
  from: { maxHeight: 0, height: '0%' },
  enter: { maxHeight: 10000, height: '100%' },
  leave: { maxHeight: 0, pointerEvents: 'none', height: '0%' },
};

export default class Collapsable extends Component {
  static propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    expanded: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
  };

  handleToggle = () => {
    const { expanded, onToggle } = this.props;
    onToggle(!expanded);
  };

  render() {
    const { header, expanded, children, className } = this.props;

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    return (
      <div className={cn('gem-collapsable', className)}>
        <div className="gem-collapsable-header" onClick={this.handleToggle}>
          {header}
        </div>
        <Transition
          native
          items={expanded}
          from={transitions.from}
          enter={transitions.enter}
          leave={transitions.leave}
        >
          {ex =>
            ex &&
            (styles => (
              <animated.div style={styles} className="gem-collapsable-content">
                {children}
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}
