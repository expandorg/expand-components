import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Arrow } from '@expandorg/uikit/assets/arrow-2.svg';

import getPages from './getPages';

import styles from './Pagination.module.styl';

const Page = ({ page, onClick, children, active, disabled }) => (
  <button
    className={cn(styles.page, {
      [styles.active]: active,
      [styles.disabled]: disabled,
    })}
    disabled={disabled}
    onClick={evt => onClick(page, disabled, evt)}
  >
    {children}
  </button>
);

Page.propTypes = {
  page: PropTypes.number.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Page.defaultProps = {
  disabled: false,
  active: false,
  onClick: undefined,
};

export default class Pagination extends Component {
  static propTypes = {
    current: PropTypes.number,
    total: PropTypes.number,
    display: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    current: 0,
    total: 0,
    display: 5,
  };

  handleClick = (page, disabled, evt) => {
    evt.preventDefault();
    if (!disabled) {
      const { onChange } = this.props;
      onChange(page);
    }
  };

  render() {
    const { current, total, display, className } = this.props;

    if (!total || total === 1) {
      return null;
    }
    const pages = getPages(current, total, display);

    return (
      <div className={cn(styles.container, className)}>
        <Page page={0} disabled={current === 0} onClick={this.handleClick}>
          <Arrow className={styles.left} />
          <Arrow className={styles.left} />
        </Page>
        <Page
          page={current - 1}
          disabled={current === 0}
          onClick={this.handleClick}
        >
          <Arrow className={styles.left} />
        </Page>
        {pages.map(p => (
          <Page
            key={p}
            page={p}
            active={p === current}
            onClick={this.handleClick}
          >
            {p + 1}
          </Page>
        ))}
        <Page
          page={current + 1}
          disabled={current === total - 1}
          onClick={this.handleClick}
        >
          <Arrow className={styles.right} />
        </Page>
        <Page
          page={total - 1}
          disabled={current === total - 1}
          onClick={this.handleClick}
        >
          <Arrow className={styles.right} />
          <Arrow className={styles.right} />
        </Page>
      </div>
    );
  }
}
