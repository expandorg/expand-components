import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as ArrowDown } from '@expandorg/uikit/assets/arrow-down.svg';

import { targetIsDescendant, KeyCodes } from '../../common/dom';

import { Input } from '../Input';
import Suggestions from './Suggestions';
import Suggestion from './Suggestion';
import TooltipIcon from '../Input/TooltipIcon';

import { containsFilter } from './filterOptions';

import './styles.styl';

export default class AutocompleteInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    allowAdd: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    theme: PropTypes.oneOf(['default', 'white']),
    tooltip: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    onKeyDown: PropTypes.func,
    filterFn: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    allowAdd: false,
    theme: 'default',
    options: [],
    className: null,
    tooltip: null,
    filterFn: containsFilter,
    onSelect: Function.prototype,
    onKeyDown: null,
  };

  constructor(props) {
    super(props);

    this.inputRef = createRef();
    this.containerRef = createRef();
    this.state = {
      focus: false,
      options: props.options, // eslint-disable-line react/no-unused-state
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
    if (value !== prevState.value || options !== prevState.options) {
      return {
        value,
        options,
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
    const { allowAdd, onKeyDown } = this.props;
    if (onKeyDown) {
      onKeyDown(evt);
    }
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

  render() {
    const {
      value,
      className,
      options,
      onSelect,
      onChange,
      filterFn,
      allowAdd,
      theme,
      tooltip,
      ...rest
    } = this.props;

    const { focus, filtered } = this.state;
    return (
      <div
        className={cn(
          'gem-autocomplete',
          `gem-autocomplete-theme-${theme}`,
          className
        )}
        ref={this.containerRef}
      >
        <Input
          type="text"
          className="gem-autocomplete-input"
          value={value}
          ref={this.inputRef}
          theme={theme}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          {...rest}
        >
          <div className="gem-autocomplete-icons">
            <ArrowDown className="gem-autocomplete-arrow" />
            {tooltip && <TooltipIcon tooltip={tooltip} />}
          </div>
        </Input>
        {focus && filtered.length !== 0 && (
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
