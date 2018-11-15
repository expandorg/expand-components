import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';

import Toast from './Toast';

const AnimatedToast = animated(Toast);

const transitions = {
  from: { height: 0, opacity: 0 },
  enter: { height: 70, opacity: 1 },
  leave: { height: 0, pointerEvents: 'none', opacity: 0 },
};

export default class ToastAnimated extends Component {
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    visible: false,
  };

  render() {
    const { children, visible, className } = this.props;
    return (
      <Transition
        items={visible}
        from={transitions.from}
        enter={transitions.enter}
        leave={transitions.leave}
      >
        {v =>
          v &&
          (styles => (
            <AnimatedToast style={styles} className={className}>
              {children}
            </AnimatedToast>
          ))
        }
      </Transition>
    );
  }
}
