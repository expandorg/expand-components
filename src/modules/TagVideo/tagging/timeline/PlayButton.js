import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tooltip from '../../../../components/Tooltip';

import styles from './PlayButton.module.styl';

class PlayButton extends PureComponent {
  static propTypes = {
    playing: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  handleClick = evt => {
    const { playing, onToggle } = this.props;
    onToggle(!playing);
    evt.preventDefault();
  };

  render() {
    const { playing, disabled, onToggle: _, children, ...rest } = this.props;
    const classes = cn(styles.button, { [styles.playing]: playing });
    return (
      <button
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
        {...rest}
      >
        <span className={cn(styles.icon, { [styles.pause]: playing })} />
        {children}
      </button>
    );
  }
}

export default Tooltip(PlayButton);
