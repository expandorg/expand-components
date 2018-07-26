import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Textarea from '../../../src/components/Textarea';

import { KeyCodes } from '../../../src/common/dom';

import styles from './CodeEditor.module.styl';

const insertAt = (str, at, ins) => {
  const pre = str.substring(0, at);
  const post = str.substring(at);
  return `${pre}${ins}${post}`;
};

export default class CodeEditor extends Component {
  static propTypes = {
    source: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    source: undefined,
    className: null,
    onChange: Function.prototype,
  };

  constructor(props) {
    super(props);
    this.editorRef = createRef();
    this.state = {
      source: props.source,
    };
  }

  static getDerivedStateFromProps({ value }, state) {
    if (value !== state.value) {
      return {
        value,
      };
    }
    return null;
  }

  updateSource = (source, callback = Function.prototype) => {
    const { onChange } = this.props;
    this.setState({ source }, () => {
      callback();
      onChange(source);
    });
  };

  handleChange = ({ target }) => {
    this.updateSource(target.value);
  };

  handleEnter = evt => {
    const { source } = this.state;

    const { selectionStart } = this.editorRef.current;
    if (source.charAt(selectionStart) !== '\n') {
      return;
    }

    let lineStart = source.substring(0, selectionStart).lastIndexOf('\n');
    lineStart = lineStart !== -1 ? lineStart : 0;

    const lineLength = selectionStart - lineStart;

    if (!lineStart || !lineLength) {
      return;
    }
    const currentLine = source.substring(lineStart + 1, selectionStart);
    const count = lineLength - currentLine.trimLeft().length;

    if (count) {
      evt.preventDefault();

      const updated = insertAt(source, selectionStart, '\n'.padEnd(count, ' '));
      this.updateSource(updated, () => this.focusAt(selectionStart + count));
    }
  };

  handleTab = evt => {
    evt.preventDefault();

    const { selectionStart } = this.editorRef.current;
    const { source } = this.state;

    this.updateSource(insertAt(source, selectionStart, '  '), () =>
      this.focusAt(selectionStart + 2)
    );
  };

  focusAt = at => {
    this.editorRef.current.selectionStart = at;
    this.editorRef.current.selectionEnd = at;
    this.editorRef.current.focus();
  };

  handleKeyDown = evt => {
    if (evt.keyCode === KeyCodes.RETURN) {
      this.handleEnter(evt);
    }
    if (evt.keyCode === KeyCodes.TAB) {
      this.handleTab(evt);
    }
  };

  render() {
    const { className } = this.props;
    const { source } = this.state;
    return (
      <Textarea
        className={cn(styles.input, className)}
        ref={this.editorRef}
        value={source}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  }
}
