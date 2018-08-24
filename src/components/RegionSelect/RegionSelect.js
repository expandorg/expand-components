import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import SelectRegionBase from './SelectRegionBase';
import Selection from './Selection';

export default class RegionSelect extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    className: null,
  };

  handleSelectionEnd = selection => {
    const { onChange } = this.props;
    onChange(selection);
  };

  render() {
    const { children, className, value } = this.props;
    return (
      <SelectRegionBase
        className={className}
        onSelectionEnd={this.handleSelectionEnd}
      >
        {({ selection }) => (
          <Fragment>
            {children}
            {selection ? (
              <Selection selection={selection} />
            ) : (
              <Selection selection={value} />
            )}
          </Fragment>
        )}
      </SelectRegionBase>
    );
  }
}
