import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class ScrollContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={cn('gem-table-scroll', className)}>
        <div className="gem-table-scroll-inner">{children}</div>
      </div>
    );
  }
}
