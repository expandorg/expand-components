import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';
import UIRegionSelect from '../../components/RegionSelect';

import styles from './RegionSelect.module.styl';

const createRect = ({ x1, x2, y1, y2 }) => ({
  left: Math.min(x1, x2),
  top: Math.min(y1, y2),
  width: Math.abs(x1 - x2),
  height: Math.abs(y1 - y2),
});

export default class RegionSelect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rect: null,
    };
  }

  handleSelection = rect => {
    this.setState({ rect });
  };

  handleSelectionEnd = rect => {
    const { name, onChange } = this.props;
    this.setState({ rect });
    onChange(name, rect);
  };

  render() {
    const { rect } = this.state;
    const { image, name } = this.props;
    return (
      <Alignment padding="small" justify="center">
        <UIRegionSelect
          className={styles.region}
          onSelection={this.handleSelection}
          onSelectionEnd={this.handleSelectionEnd}
        >
          <img className={styles.image} src={image} alt={name} />
          {rect && (
            <div className={styles.selection} style={createRect(rect)} />
          )}
        </UIRegionSelect>
      </Alignment>
    );
  }
}
