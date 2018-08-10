import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Select.module.styl';

const getAnswrId = option => {
  if (typeof option === 'string') {
    return option;
  }
  return option.id;
};

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    layout: PropTypes.oneOf(['cols2']),
  };

  static defaultProps = {
    value: '',
    className: null,
    layout: 'cols2',
  };

  handleSelect = answer => {
    const { onSelect } = this.props;
    onSelect(getAnswrId(answer));
  };

  render() {
    const { value, className, options, children, layout } = this.props;
    const classes = cn(styles.container, styles[layout], className);
    return (
      <div className={classes}>
        {options.map(option => {
          const key = getAnswrId(option);
          return children({
            key,
            selected: key === value,
            option,
            onSelect: this.handleSelect,
          });
        })}
      </div>
    );
  }
}
