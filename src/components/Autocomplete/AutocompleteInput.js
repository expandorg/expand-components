import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { targetIsDescendant, KeyCodes } from '../../common/dom';

import Suggestions from './Suggestions';
import Suggestion from './Suggestion';

import { containsFilter } from './filterOptions';

import './AutocompleteInput.styl';

export default class AutocompleteInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    allowAdd: PropTypes.bool,
    clear: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    filterFn: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    clear: false,
    allowAdd: false,
    options: [],
    className: null,
    filterFn: containsFilter,
    onSelect: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.inputRef = createRef();
    this.containerRef = createRef();

    this.state = {
      focus: false,
      value: props.value,
      filtered: props.filterFn(props.options, props.value),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { focus } = this.state;
    if (!prevState.focus && focus) {
      document.addEventListener('click', this.handleDocumentClick);
    }
    if (prevState.focus && !focus) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    const { focus } = this.state;
    if (focus) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  static getDerivedStateFromProps({ value, options, filterFn }, prevState) {
    if (value !== prevState.value) {
      return {
        value,
        filtered: filterFn(options, value),
      };
    }
    return null;
  }

  handleDocumentClick = event => {
    const { focus } = this.state;
    if (focus && !targetIsDescendant(event, this.containerRef.current)) {
      this.blur();
    }
  };

  handleKeyDown = evt => {
    const { allowAdd } = this.props;
    switch (evt.keyCode) {
      case KeyCodes.ESC:
      case KeyCodes.TAB:
        this.blur();
        break;
      case KeyCodes.ENTER: {
        const { value, filtered } = this.state;
        if (value) {
          if (allowAdd) {
            this.handleSelect(value);
          } else if (filtered.length) {
            this.handleSelect(filtered[0]);
          }
        }
        break;
      }
      default:
        break;
    }
  };

  handleChange = evt => {
    const { onChange } = this.props;
    onChange(evt);
  };

  handleFocus = () => {
    this.setState({ focus: true });
  };

  blur = () => {
    const { focus } = this.state;
    if (focus) {
      this.inputRef.current.blur();
      this.setState({ focus: false });
    }
  };

  focus = () => {
    this.inputRef.current.focus();
  };

  handleSelect = value => {
    const { onSelect } = this.props;
    onSelect(value);
    this.blur();
  };

  handleClear = evt => {
    evt.preventDefault();
    this.handleSelect('');
  };

  render() {
    const {
      value,
      className,
      options,
      onSelect,
      onChange,
      filterFn,
      allowAdd,
      clear,
      ...rest
    } = this.props;
    const { focus, filtered } = this.state;
    return (
      <div
        className={cn('gem-autocomplete', className)}
        ref={this.containerRef}
      >
        <input
          type="text"
          className="gem-autocomplete-input"
          value={value}
          ref={this.inputRef}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          {...rest}
        />
        {clear &&
          value && (
            <button
              className="gem-autocomplete-clear"
              onClick={this.handleClear}
            >
              ✕
            </button>
          )}
        {focus &&
          filtered.length !== 0 && (
            <Suggestions>
              {filtered.map(suggest => (
                <Suggestion
                  key={suggest}
                  value={suggest}
                  onSelect={this.handleSelect}
                />
              ))}
            </Suggestions>
          )}
      </div>
    );
  }
}
