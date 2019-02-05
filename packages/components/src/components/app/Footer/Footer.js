import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import './Footer.styl';

export default class Footer extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isExternal: PropTypes.bool,
      })
    ),
    className: PropTypes.string,
  };

  static defaultProps = {
    links: [],
    className: null,
  };

  render() {
    const { className, links } = this.props;

    return (
      <div className={cn('gem-footer', className)}>
        {links.map(({ link, text, isExternal }) => {
          if (isExternal) {
            return (
              <a className="gem-footer-link" href={link}>
                {text}
              </a>
            );
          }
          return (
            <Link className="gem-footer-link" to={link}>
              {text}
            </Link>
          );
        })}
      </div>
    );
  }
}
