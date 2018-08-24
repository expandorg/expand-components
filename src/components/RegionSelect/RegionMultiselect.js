import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { replaceAtIndex } from '../../common/immutable';

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

  handleResize = (value, index) => {
    const { onChange, values } = this.props;
    onChange(replaceAtIndex(values, index, value));
  };
  //
  // handleClear = evt => {
  //   evt.preventDefault();
  //   const { onChange } = this.props;
  //   onChange([]);
  // };

  render() {
    const { children, values, className } = this.props;
    return (
      <SelectRegionBase
        className={className}
        onSelectionEnd={this.handleSelectionEnd}
      >
        {({ selection }) => (
          <Fragment>
            {children}
            {values.map((value, index) => (
              <Selection
                selection={value}
                key={getKey(value)}
                resize
                onResize={resized => this.handleResize(resized, index)}
              />
            ))}
            <Selection selection={selection} />
            {/* {values.length !== 0 && (
              <button
                className="gem-selectregion-clear"
                onClick={this.handleClear}
              >
                Clear
              </button>
            )} */}
          </Fragment>
        )}
      </SelectRegionBase>
    );
  }
}
