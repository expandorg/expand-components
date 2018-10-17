import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@gemsorg/validation';

import { Button, Checkbox } from '@gemsorg/components';

import Alignment from '../../components/Alignment';
import Modal from '../../components/Modal';

import PropControlTypes from '../../form/Form/PropControlTypes';

export default class Agreement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    button: PropTypes.string,
    label: PropTypes.string.isRequired,
    headline: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: false,
    button: null,
    headline: null,
  };

  static module = {
    type: 'agreement',
    name: 'License Agreement',
    validation: {
      isTrue: rules.isTrue,
    },
    editor: {
      properties: {
        button: {
          type: PropControlTypes.string,
          placeholder: 'button caption',
        },
        label: {
          type: PropControlTypes.string,
          placeholder: 'Checkbox label',
          required: true,
        },
        headline: {
          type: PropControlTypes.string,
          placeholder: 'Modal headline',
        },
        modules: {
          type: PropControlTypes.modules,
        },
      },
      defaults: {
        button: 'Rules',
        label: 'You must agree with rules',
        headline: 'question title',
        modules: {
          name: 'p',
          type: 'paragraph',
          content: 'Lorem ipsum dolor sit amet, consectetur',
        },
      },
    },
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const {
      value,
      name,
      button,
      children,
      headline,
      label,
      onChange,
    } = this.props;
    const { visible } = this.state;
    return (
      <Alignment padding="small" vCenter>
        {button && (
          <Button size="medium" theme="blue" onClick={this.handleToggle}>
            {button}
          </Button>
        )}
        <Checkbox
          name={name}
          label={label}
          value={value}
          onChange={changed => onChange(name, changed)}
        />
        {button && (
          <Modal
            visible={visible}
            onHide={this.handleToggle}
            headline={headline}
            button="Close"
          >
            {children}
          </Modal>
        )}
      </Alignment>
    );
  }
}
