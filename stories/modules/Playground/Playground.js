import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import cn from 'classnames';

import { Module } from '../../../src/modules/Module';
import { Form, formProps, FormDataProvider } from '../../../src/modules/Form';

import Editor from './editor/Editor';

import { compileForm, appendModule } from './formBuilder';

import styles from './Playground.module.styl';

const DELAY = 300;

export default class Playground extends Component {
  static propTypes = {
    editMode: PropTypes.oneOf(['full', 'edit', 'readOnly', 'hidden']),
    fullscreen: PropTypes.bool,
    vertical: PropTypes.bool,
    form: formProps.isRequired,
  };

  static defaultProps = {
    fullscreen: false,
    vertical: false,
    editMode: 'full',
  };

  constructor(props) {
    super(props);

    this.state = {
      source: JSON.stringify(props.form, undefined, 2),
      form: props.form,
      formData: { allowedRetries: 3, currentTry: 1 },
      error: null,
    };

    this.compileFormDebounced = debounce(this.compileForm, DELAY);
  }

  compileForm = () => {
    try {
      const { source } = this.state;
      const form = compileForm(source);
      this.setState({ form, error: null });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleChange = source => {
    this.setState({ source }, this.compileFormDebounced);
  };

  handleAddModule = moduleControl => {
    const { error, form } = this.state;
    if (!error) {
      try {
        this.setState({ ...appendModule(form, moduleControl) });
      } catch (err) {
        this.setState({ error: err });
      }
    }
  };

  handleSubmit = values => {
    alert(JSON.stringify(values, undefined, 2));
  };

  render() {
    const { editMode, fullscreen, vertical } = this.props;
    const { source, form, formData, error } = this.state;
    const classes = cn(styles.container, {
      [styles.fullscreen]: fullscreen,
    });
    return (
      <div className={classes}>
        <div className={cn(styles.content, { [styles.vertical]: vertical })}>
          {editMode !== 'hidden' && (
            <Editor
              editMode={editMode}
              source={source}
              error={error}
              onChange={this.handleChange}
              onAddModule={this.handleAddModule}
            />
          )}
          <div className={styles.formContainer}>
            <FormDataProvider formData={formData}>
              <Form
                form={form}
                className={styles.form}
                onSubmit={this.handleSubmit}
              >
                {moduleProps => <Module {...moduleProps} />}
              </Form>
            </FormDataProvider>
          </div>
        </div>
      </div>
    );
  }
}
