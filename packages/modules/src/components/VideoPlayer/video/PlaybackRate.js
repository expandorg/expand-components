import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './PlaybackRate.module.styl';

const titles = {
  1: '1',
  2: '2',
  4: '4',
  0.5: '0.5',
};

const rates = [4, 2, 1, 0.5];

export default class PlaybackRate extends PureComponent {
  static propTypes = {
    rate: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    menu: false,
  };

  handleChange = (rate, evt) => {
    const { onChange } = this.props;
    onChange(rate);
    this.setState({ menu: false });
    evt.preventDefault();
  };

  handleToggle = evt => {
    evt.preventDefault();
    this.setState(({ menu }) => ({ menu: !menu }));
  };

  render() {
    const { rate, children, onChange: _, ...rest } = this.props;
    const { menu } = this.state;
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={this.handleToggle} {...rest}>
          <span className={styles.x}>x</span>
          {titles[rate]}
        </button>
        {menu && (
          <div className={styles.menu}>
            {rates.map(r => (
              <button
                className={styles.rate}
                onClick={evt => this.handleChange(r, evt)}
              >
                <span className={styles.x}>x</span>
                {titles[r]}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
