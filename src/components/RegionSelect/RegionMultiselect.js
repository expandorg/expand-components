import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { replaceAtIndex, removeAtIndex } from '../../common/immutable';

import SelectRegionBase from './SelectRegionBase';
import Selection from './Selection';

const getKey = ({ x1, y1, x2, y2 }) => `${x1}-${y1}-${x2}-${y2}`;

export default class RegionMultiselect extends Component {
  static propTypes = {
    className: PropTypes.string,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        x1: PropTypes.number,
        y1: PropTypes.number,
        x2: PropTypes.number,
        y2: PropTypes.number,
      })
    ),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    values: [],
  };

  handleSelectionEnd = value => {
    const { onChange, values } = this.props;
    if (value) {
      onChange(values.concat(value));
    }
  };

  handleDelete = index => {
    const { onChange, values } = this.props;
    onChange(removeAtIndex(values, index));
  };

  handleResize = (value, index) => {
    const { onChange, values } = this.props;
    onChange(replaceAtIndex(values, index, value));
  };

  render() {
    const { children, values, className } = this.props;
    return (
      <SelectRegionBase
        className={className}
        onSelectionEnd={this.handleSelectionEnd}
      >
        {({ selection, width, height }) => (
          <Fragment>
            {children}
            {values.map((value, index) => (
              <Selection
                selection={value}
                cWidth={width}
                cHeight={height}
                key={getKey(value)}
                editable
                onDelete={() => this.handleDelete(index)}
                onResize={resized => this.handleResize(resized, index)}
              />
            ))}
            <Selection selection={selection} cWidth={width} cHeight={height} />
          </Fragment>
        )}
      </SelectRegionBase>
    );
  }
}
