import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DocumentTitle from 'react-document-title';

import './Page.styl';

export default class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    sidebar: PropTypes.bool,
    navbar: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    sidebar: true,
    navbar: true,
  };

  render() {
    const { children, title, className, sidebar, navbar } = this.props;

    return (
      <DocumentTitle title={`${title} - Expand`}>
        <div className="gem-page">
          <div
            className={cn(
              'gem-content',
              {
                'gem-content__sidebar': sidebar,
                'gem-content__navbar': navbar,
              },
              className
            )}
          >
            {children}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
