import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.styl';

export default class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: undefined,
    onChange: undefined,
    className: null,
  };

  render() {
    const { onChange, className, value, ...rest } = this.props;
    return (
      <input
        className={cn('gem-input', className)}
        onChange={onChange}
        value={value}
        {...rest}
      />
    );
  }
}
