import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

import './Footer.styl';

export default function Footer({ className, links }) {
  return (
    <div className={cn('gem-footer', className)}>
      {links.map(({ link, text, isExternal }) => {
        if (isExternal) {
          return (
            <a
              key={link}
              className="gem-footer-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </a>
          );
        }
        return (
          <Link key={link} className="gem-footer-link" to={link}>
            {text}
          </Link>
        );
      })}
    </div>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isExternal: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

Footer.defaultProps = {
  links: [],
  className: null,
};
