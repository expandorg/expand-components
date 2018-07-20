import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Submit from '../Submit';
import Article from '../Article';

import FieldType from './fieldType';
import fieldProps from './fieldProps';

export default class Field extends PureComponent {
  static propTypes = {
    field: fieldProps.isRequired,
    value: PropTypes.any, // eslint-disable-line
    isSubmitting: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: undefined,
  };

  render() {
    const { field, value, onChange, isSubmitting, onSubmit } = this.props;

    switch (field.type) {
      case FieldType.text:
      case FieldType.number:
      case FieldType.email:
      case FieldType.password:
        return <Input {...field} value={value} onChange={onChange} />;
      case FieldType.article:
        return <Article {...field} />;
      case FieldType.submit:
        return (
          <Submit {...field} onSubmit={onSubmit} isSubmitting={isSubmitting} />
        );
      default:
        break;
    }
    return null;
  }
}
