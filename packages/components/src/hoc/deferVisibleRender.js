import React, { Component } from 'react';

export default function deferVisibleRender(WrappedComponent) {
  class DeferredVisibleWrapper extends Component {
    state = { visible: false };

    timeoutId = null;

    componentDidMount() {
      this.timeoutId = setTimeout(() => {
        this.setState({ visible: true });
        this.timeoutId = null;
      });
    }

    componentWillUnmount() {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
      }
    }

    render() {
      const { visible } = this.state;
      return <WrappedComponent visible={visible} {...this.props} />;
    }
  }

  return DeferredVisibleWrapper;
}
