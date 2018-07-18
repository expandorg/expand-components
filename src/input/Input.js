import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Input.module.styl';

export default class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
    className: null,
  };

  render() {
    const { onChange, className, value, ...rest } = this.props;
    return (
      <input
        {...rest}
        className={cn(styles.input, className)}
        onChange={onChange}
        value={value}
      />
    );
  }
}
