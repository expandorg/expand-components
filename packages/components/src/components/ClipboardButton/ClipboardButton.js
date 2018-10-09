import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import ClipboardJS from 'clipboard';

export default class ClipboardButton extends Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    value: '',
    className: null,
  };

  buttonRef = createRef();

  componentDidMount() {
    this.clipboard = new ClipboardJS(this.buttonRef.current, {
      text: this.getText,
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  getText = () => {
    const { value } = this.props;
    return value;
  };

  render() {
    const { children, className } = this.props;
    return (
      <button ref={this.buttonRef} className={className} type="button">
        {children}
      </button>
    );
  }
}
