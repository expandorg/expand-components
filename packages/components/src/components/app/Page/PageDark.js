import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import './PageDark.styl';

export default function PageDark({ children, title, className }) {
  useDocumentTitle(title);
  return <div className={cn('gem-pagedark', className)}>{children}</div>;
}

PageDark.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PageDark.defaultProps = {
  className: null,
};
