import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import highlight from './highlight';

import './Markdown.styl';

export default class Markdown extends Component {
  static propTypes = {
    html: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.containerRef = createRef();
  }

  componentDidMount() {
    highlight(this.containerRef.current);
  }

  componentDidUpdate() {
    highlight(this.containerRef.current);
  }

  render() {
    const { html } = this.props;
    return (
      <div
        ref={this.containerRef}
        className="gem-gh-markdown"
        dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
      />
    );
  }
}
