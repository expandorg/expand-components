import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../Button';
import { ReactComponent as Arrow } from '../../../assets/arrow-2.svg';

import { findActive, isPrevActive, isNextActive } from '../settings';

import styles from './Hint.module.styl';

export default class Actions extends Component {
  static propTypes = {
    settings: PropTypes.shape({
      order: PropTypes.number,
      orientation: PropTypes.string,
      hint: PropTypes.string,
    }).isRequired,

    active: PropTypes.string,

    presence: PropTypes.arrayOf(PropTypes.string),

    onActiveChange: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  static defaultProps = {
    active: null,
    presence: [],
  };

  handleClick = order => {
    const { settings, onActiveChange } = this.props;
    const activeId = findActive(order, settings);

    onActiveChange(activeId);
  };

  render() {
    const { settings, onHide, active, presence } = this.props;

    const prev = isPrevActive(active, settings, presence);
    const next = isNextActive(active, settings, presence);

    return (
      <div className={styles.actionsConatainer}>
        <Button onClick={onHide} className={styles.done} theme="grey">
          Done
        </Button>
        <div>
          <Button
            onClick={() => this.handleClick(settings[active].order - 1)}
            className={cn(styles.prev, { [styles.disabled]: !prev })}
            theme="grey"
            disabled={!prev}
          >
            <Arrow />
          </Button>
          <Button
            onClick={() => this.handleClick(settings[active].order + 1)}
            className={cn(styles.next, { [styles.disabled]: !next })}
            theme="grey"
            disabled={!next}
          >
            <Arrow />
          </Button>
        </div>
      </div>
    );
  }
}
