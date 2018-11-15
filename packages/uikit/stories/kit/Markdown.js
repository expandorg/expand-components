import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import highlight from './highlight';

import './Markdown.styl';

export default class Markdown extends Component {
  static propTypes = {
    doc: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      md: marked(props.doc, { ...marked.defaults }),
    };

    this.containerRef = createRef();
  }

  componentDidMount() {
    highlight(this.containerRef.current);
  }

  componentDidUpdate() {
    highlight(this.containerRef.current);
  }

  render() {
    const { md } = this.state;
    return (
      <div
        ref={this.containerRef}
        className="gem-gh-markdown"
        dangerouslySetInnerHTML={{ __html: md }} // eslint-disable-line react/no-danger
      />
    );
  }
}
