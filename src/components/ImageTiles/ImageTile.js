import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { Checkmark } from '../SvgIcons';

import { getTileIndex, getTileStyle } from './tile';

export default class Tile extends Component {
  static propTypes = {
    column: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  handleSelect = () => {
    const { row, column, columns, onSelect } = this.props;
    onSelect(getTileIndex(row, column, columns));
  };

  render() {
    const { column, row, columns, rows, selected } = this.props;
    const classes = cn('gem-imagetiles-tile', {
      'gem-imagetiles-tile-selected': selected,
    });
    return (
      <div // eslint-disable-line
        className={classes}
        style={getTileStyle(row, column, rows, columns)}
        onClick={this.handleSelect}
      >
        <div className="gem-imagetiles-tile-checkmark">
          <Checkmark />
        </div>
      </div>
    );
  }
}
