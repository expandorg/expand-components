import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import './Page.styl';

export default function Page({ children, title, className, sidebar, navbar }) {
  useDocumentTitle(`${title} - Expand`);
  return (
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
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  sidebar: PropTypes.bool,
  navbar: PropTypes.bool,
};

Page.defaultProps = {
  className: null,
  sidebar: true,
  navbar: true,
};
