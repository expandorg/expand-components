import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../src/components/Button';

export default class Toggle extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Toggle',
  };

  state = {
    visible: false,
  };

  handleToggle = () => this.setState(({ visible }) => ({ visible: !visible }));

  render() {
    const { children, title } = this.props;
    const { visible } = this.state;
    return (
      <Fragment>
        <Button theme="white" onClick={this.handleToggle}>
          {title}
        </Button>
        {children(visible, this.handleToggle)}
      </Fragment>
    );
  }
}
