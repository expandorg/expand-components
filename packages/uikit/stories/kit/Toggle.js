import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  static propTypes = {
    title: PropTypes.string,
    theme: PropTypes.string,
  };

  static defaultProps = {
    title: 'Toggle',
    theme: 'white',
  };

  state = {
    visible: false,
  };

  handleToggle = () => this.setState(({ visible }) => ({ visible: !visible }));

  render() {
    const { children, theme, title } = this.props;
    const { visible } = this.state;
    return (
      <Fragment>
        <button
          className={`gem-button gem-button-medium gem-button-${theme}`}
          onClick={this.handleToggle}
        >
          {title}
        </button>
        {children(visible, this.handleToggle)}
      </Fragment>
    );
  }
}
