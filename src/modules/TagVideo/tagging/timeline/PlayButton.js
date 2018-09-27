import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tooltip from '../../../../components/Tooltip';

import styles from './PlayButton.module.styl';

class PlayButton extends Component {
  static propTypes = {
    playing: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  handleClick = evt => {
    const { playing, onToggle } = this.props;
    onToggle(!playing);
    evt.preventDefault();
  };

  render() {
    const { playing, onToggle: _, children, ...rest } = this.props;
    const classes = cn(styles.button, { [styles.playing]: playing });
    return (
      <button className={classes} onClick={this.handleClick} {...rest}>
        {playing ? '||' : '>'}
        {children}
      </button>
    );
  }
}

export default Tooltip(PlayButton);
