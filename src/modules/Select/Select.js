import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.styl';

const getAnswrId = option => {
  if (typeof option === 'string') {
    return option;
  }
  return option.id || option.caption;
};

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    columns: PropTypes.oneOf([2, 3]),
  };

  static defaultProps = {
    className: null,
    columns: 2,
  };

  handleSelect = answer => {
    const { onSelect } = this.props;
    onSelect(getAnswrId(answer));
  };

  render() {
    const { className, options, children, columns } = this.props;
    const classes = cn(styles.container, styles[`cols${columns}`], className);
    return (
      <div className={classes}>
        {options.map(option => {
          const id = getAnswrId(option);
          return children({
            id,
            option,
            onSelect: this.handleSelect,
          });
        })}
      </div>
    );
  }
}
