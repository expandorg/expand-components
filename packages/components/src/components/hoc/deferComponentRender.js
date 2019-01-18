import React, { Component } from 'react';

export default function deferComponentRender(WrappedComponent) {
  class DeferredRenderWrapper extends Component {
    mounted = false;
    state = { shouldRender: false };

    componentDidMount() {
      this.mounted = true;
      window.requestAnimationFrame(() => {
        if (this.mounted) {
          this.setState({ shouldRender: true });
        }
      });
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const { shouldRender } = this.state;
      return shouldRender ? <WrappedComponent {...this.props} /> : null;
    }
  }

  return DeferredRenderWrapper;
}
