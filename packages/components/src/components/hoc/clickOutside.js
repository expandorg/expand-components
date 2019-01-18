import React, { Component, createRef } from 'react';

import { targetIsDescendant } from '../../common/dom';

export default function clickOutside(Wrapped) {
  class ClickOutside extends Component {
    constructor(props) {
      super(props);

      this.wrap = createRef();
      this.elementRef = createRef();
    }

    componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, true);
      document.addEventListener('touchstart', this.handleDocumentClick, true);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick, true);
      document.removeEventListener(
        'touchstart',
        this.handleDocumentClick,
        true
      );
    }

    handleDocumentClick = evt => {
      if (
        !targetIsDescendant(evt, this.elementRef.current) &&
        typeof this.wrap.current.handleClickOutside === 'function'
      ) {
        this.wrap.current.handleClickOutside(evt);
      }
    };

    render() {
      return (
        <Wrapped
          ref={this.wrap}
          forwardedRef={this.elementRef}
          {...this.props}
        />
      );
    }
  }
  return ClickOutside;
}
