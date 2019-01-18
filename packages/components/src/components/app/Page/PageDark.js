import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DocumentTitle from 'react-document-title';

import './PageDark.styl';

export default class PageDark extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, title, className } = this.props;

    return (
      <DocumentTitle title={title}>
        <div className={cn('gem-pagedark', className)}>{children}</div>
      </DocumentTitle>
    );
  }
}
