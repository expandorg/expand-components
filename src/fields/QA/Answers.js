import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Answers.module.styl';

const getAnswrId = answer => {
  if (typeof answer === 'string') {
    return answer;
  }
  return answer.id;
};

export default class Answers extends Component {
  static propTypes = {
    answers: PropTypes.arrayOf(PropTypes.any).isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    layout: PropTypes.oneOf(['cols2']),
  };

  static defaultProps = {
    value: '',
    className: null,
    layout: 'cols2',
  };

  handleSelect = answer => {
    const { onSelect } = this.props;
    onSelect(getAnswrId(answer));
  };

  render() {
    const { value, className, answers, children, layout } = this.props;
    const classes = cn(styles.container, styles[layout], className);
    return (
      <div className={classes}>
        {answers.map(answer => {
          const key = getAnswrId(answer);
          return children({
            key,
            selected: key === value,
            answer,
            onSelect: this.handleSelect,
          });
        })}
      </div>
    );
  }
}
