import React, { Component, createRef } from 'react';
import debounce from 'debounce';

const RESIZE_DEBOUNCE = 200;

export default function windowResize(
  Wrapped,
  debounceInterval = RESIZE_DEBOUNCE
) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.handleResize = debounce(this.handleResize, debounceInterval);
      this.wrap = createRef();
    }

    componentDidMount() {
      document.addEventListener('resize', this.handleResize, true);
    }

    componentWillUnmount() {
      this.handleResize.clear();
      document.removeEventListener('resize', this.handleResize, true);
    }

    handleResize = evt => {
      const { current } = this.wrap;
      if (current && typeof current.handleResize === 'function') {
        current.handleResize(evt);
      }
    };

    render() {
      return <Wrapped ref={this.wrap} {...this.props} />;
    }
  };
}
