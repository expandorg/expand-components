import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className, ...rest } = this.props;

    return (
      <td className={cn('gem-table-cell', className)} {...rest}>
        {children}
      </td>
    );
  }
}
