import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import formatItem from './formatItem';
import { IdType, getIdValue } from './ids';

import styles from './styles.module.styl';

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    idType: PropTypes.oneOf([
      IdType.none,
      IdType.small,
      IdType.capital,
      IdType.roman,
      IdType.numerals,
    ]).isRequired,
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    columns: PropTypes.oneOf([2, 3]),
  };

  static defaultProps = {
    className: null,
    columns: 2,
  };

  handleSelect = value => {
    const { onSelect } = this.props;
    onSelect(value);
  };

  render() {
    const { className, options, children, columns, idType } = this.props;

    const classes = cn(styles.container, styles[`cols${columns}`], className);

    return (
      <div className={classes}>
        {options.map((option, idx) =>
          children({
            option: formatItem(option, getIdValue(idx, idType)),
            onSelect: this.handleSelect,
          })
        )}
      </div>
    );
  }
}
