import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '../../common/validation';

import Alignment from '../Alignment';
import { ImageRegionMultiselect } from '../../components/RegionSelect';

import styles from './styles.module.styl';

const getInitialValue = initial => {
  if (!initial || !Array.isArray(initial)) {
    return [];
  }
  return initial;
};

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

  static module = {
    type: 'regionMultiselect',
    report: ['Image is not loading'],
    validation: {
      isRequired: rules.isRequiredArray,
      isNotEmpty: rules.isRequiredArray,
    },
    editor: {
      defaults: {
        image: 'https://portal.gems.org/images/complete-tasks.png',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { image, value, readOnly, initial } = this.props;
    const values = readOnly ? getInitialValue(initial) : value;
    return (
      <Alignment padding="small" justify="center">
        <ImageRegionMultiselect
          className={styles.region}
          src={image}
          displayToggle={readOnly}
          readOnly={readOnly}
          values={values}
          onChange={this.handleChange}
        />
      </Alignment>
    );
  }
}
