import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tabs.styl';

export function Tab({ children, className, active, ...rest }) {
  return (
    <div
      className={cn(
        'gem-tabs-tab',
        { 'gem-tabs-tab-active': active },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Tab.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};

Tab.defaultProps = {
  className: null,
  active: false,
};

export function Tabs({ children, className, theme }) {
  return (
    <div className={cn('gem-tabs', `gem-tabs__${theme}`, className)}>
      {children}
    </div>
  );
}

Tabs.propTypes = {
  theme: PropTypes.oneOf(['default', 'raised', 'underline']),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  theme: 'default',
  className: null,
};
