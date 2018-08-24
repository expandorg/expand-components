import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
            {values.map(value => (
              <Selection selection={value} key={getKey(value)} />
            ))}
            <Selection selection={selection} />
          </Fragment>
        )}
      </SelectRegionBase>
    );
  }
}
