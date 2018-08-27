import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';
import { RegionSelect as UIRegionSelect } from '../../components/RegionSelect';

import styles from './styles.module.styl';

export default class RegionSelect extends Component {
  static propTypes = {
    value: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { image, name, value } = this.props;
    return (
      <Alignment padding="small" justify="center">
        <div className={styles.inner}>
          <UIRegionSelect
            className={styles.region}
            value={value}
            onChange={this.handleChange}
          >
            <img className={styles.image} src={image} alt={name} />
          </UIRegionSelect>
        </div>
      </Alignment>
    );
  }
}
