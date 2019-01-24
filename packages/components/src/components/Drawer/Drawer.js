import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';

const from = { width: 0, opacity: 0 };
const leave = { width: 0, pointerEvents: 'none', opacity: 0 };

export default class Drawer extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    className: PropTypes.string,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    visible: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      enter: { width: props.width, opacity: 1 },
    };
  }

  render() {
    const { children, visible, className } = this.props;
    const { enter } = this.state;

    return (
      <Transition items={visible} from={from} enter={enter} leave={leave}>
        {v =>
          v &&
          (styles => (
            <animated.div style={styles} className={className}>
              {children}
            </animated.div>
          ))
        }
      </Transition>
    );
  }
}
