import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Actions from './Actions';
import { getHintPositionByOrientation } from '../positioning';

import styles from './Hint.module.styl';

export default class Hint extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    active: PropTypes.string,
    position: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    }),
    onActiveChange: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  static defaultProps = {
    position: null,
    active: null,
  };

  render() {
    const { settings, active, position } = this.props;
    if (!position) {
      return null;
    }

    const item = settings[active];

    return (
      <div
        style={getHintPositionByOrientation(position, item.orientation)}
        className={styles.container}
      >
        <div className={cn(styles.hint, styles[item.orientation])}>
          <div>{item.hint}</div>
          <Actions {...this.props} />
        </div>
      </div>
    );
  }
}
