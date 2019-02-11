import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Transition, animated } from 'react-spring/renderprops';

import Notification from './Notification';

import styles from './NotificationAnimated.module.styl';

const from = { right: -200, opacity: 0 };
const enter = { right: 25, opacity: 1 };
const leave = { right: -200, pointerEvents: 'none', opacity: 0 };

export default class NotificationAnimated extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      type: PropTypes.oneOf(['warning', 'error', 'message', 'success'])
        .isRequired,
      message: PropTypes.string,
    }),
    className: PropTypes.string,
    onClear: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    notification: null,
  };

  render() {
    const { notification, onClear, className } = this.props;
    return (
      <Transition items={notification} from={from} enter={enter} leave={leave}>
        {n =>
          n &&
          (style => (
            <animated.div
              style={style}
              className={cn(styles.container, className)}
            >
              <Notification notification={n} onClear={onClear} />
            </animated.div>
          ))
        }
      </Transition>
    );
  }
}
