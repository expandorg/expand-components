import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { rules } from '../../common/validation';
import Alignment from '../Alignment';
import { ImageTiles as UIImageTiles } from '../../components/ImageTiles';

import styles from './ImageTiles.module.styl';

export default class ImageTiles extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    columns: PropTypes.number,
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    columns: 4,
    rows: 4,
    value: [],
  };

  static module = {
    type: 'imageTiles',
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
    const { value, image, columns, rows } = this.props;
    return (
      <Alignment padding="small" justify="center">
        <div className={styles.region}>
          <UIImageTiles
            src={image}
            columns={columns}
            rows={rows}
            selection={value}
            onChange={this.handleChange}
          />
        </div>
      </Alignment>
    );
  }
}
