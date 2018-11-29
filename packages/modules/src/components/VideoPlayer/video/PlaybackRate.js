import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './PlaybackRate.module.styl';

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
          {rate}
        </button>
        {menu && (
          <div className={styles.menu}>
            {rates.map(r => (
              <button
                key={r}
                className={styles.rate}
                onClick={evt => this.handleChange(r, evt)}
              >
                <span className={styles.x}>x</span>
                {r}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
