import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';
import { RegionMultiselect as UIRegionMultiselect } from '../../components/RegionSelect';

import styles from './styles.module.styl';

export default class RegionMultiselect extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(
      PropTypes.shape({
        x1: PropTypes.number,
        y1: PropTypes.number,
        x2: PropTypes.number,
        y2: PropTypes.number,
      })
    ),
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: [],
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  handleClear = evt => {
    evt.preventDefault();
    this.handleChange([]);
  };

  render() {
    const { image, name, value } = this.props;
    return (
      <Alignment padding="small" justify="center">
        <div className={styles.inner}>
          <UIRegionMultiselect
            className={styles.region}
            values={value}
            onChange={this.handleChange}
          >
            <img className={styles.image} src={image} alt={name} />
          </UIRegionMultiselect>
          {value.length !== 0 && (
            <button className={styles.clear} onClick={this.handleClear}>
              Clear
            </button>
          )}
        </div>
      </Alignment>
    );
  }
}
