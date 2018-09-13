import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';
import { ImageRegionMultiselect } from '../../components/RegionSelect';

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

  render() {
    const { image, value } = this.props;
    return (
      <Alignment padding="small" justify="center">
        <ImageRegionMultiselect
          className={styles.region}
          src={image}
          values={value}
          onChange={this.handleChange}
        />
      </Alignment>
    );
  }
}
