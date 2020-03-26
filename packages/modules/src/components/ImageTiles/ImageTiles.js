import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import {
  range,
  removeAtIndex,
} from '@expandorg/components/src/common/immutable';

import ImageTile from './ImageTile';

import { getTileIndex } from './tile';

import './ImageTiles.styl';

export default class ImageTiles extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    columns: PropTypes.number,
    rows: PropTypes.number,
    selection: PropTypes.arrayOf(PropTypes.number),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    selection: [],
    columns: 4,
    rows: 4,
  };

  handleSelect = (element) => {
    const { selection, onChange } = this.props;

    const index = selection.indexOf(element);
    const result =
      index === -1 ? [...selection, element] : removeAtIndex(selection, index);

    onChange(result);
  };

  render() {
    const { src, columns, rows, selection, className } = this.props;
    return (
      <div className={cn('gem-imagetiles', className)}>
        <img src={src} className="gem-imagetiles-image" alt="Select tiles" />
        <div className="gem-imagetiles-tiles">
          {range(rows).map((row) => (
            <Fragment key={row}>
              {range(columns).map((column) => (
                <ImageTile
                  key={column}
                  column={column}
                  row={row}
                  columns={columns}
                  rows={rows}
                  selected={selection.includes(
                    getTileIndex(row, column, columns)
                  )}
                  onSelect={this.handleSelect}
                />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}
