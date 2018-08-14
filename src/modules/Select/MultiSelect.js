import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import getAnswrId from './getAnswrId';

import styles from './styles.module.styl';

export default class MultiSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    value: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    layout: PropTypes.oneOf(['cols2', 'cols3']),
  };

  static defaultProps = {
    value: [],
    className: null,
    layout: 'cols2',
  };

  handleSelect = answer => {
    const { onSelect, value } = this.props;

    const selection = value || [];
    const answerId = getAnswrId(answer);

    const updated = selection.includes(answerId)
      ? selection.filter(el => el !== answerId)
      : [...selection, answerId];

    onSelect(updated);
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
            selected: value && value.includes(key),
            option,
            onSelect: this.handleSelect,
          });
        })}
      </div>
    );
  }
}
