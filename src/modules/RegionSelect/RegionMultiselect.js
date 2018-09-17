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
    readOnly: PropTypes.bool,
    initial: PropTypes.arrayOf(
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
    readOnly: false,
    initial: [],
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { image, value, readOnly, initial } = this.props;
    const values = readOnly ? initial : value;
    return (
      <Alignment padding="small" justify="center">
        <ImageRegionMultiselect
          className={styles.region}
          src={image}
          readOnly={readOnly}
          values={values}
          onChange={this.handleChange}
        />
      </Alignment>
    );
  }
}
