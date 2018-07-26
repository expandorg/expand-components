import React, { Component } from 'react';
import debounce from 'debounce';

import ErrorMessage from '../../../src/components/ErrorMessage';
import Form from './Form';
import CodeEditor from './CodeEditor';

import sample from './sample.json';
import formBuilder from './formBuilder';

import styles from './Playground.module.styl';

const DELAY = 300;

export default class Playground extends Component {
  constructor(props) {
    super(props);

    this.updateFormDebounced = debounce(this.updateForm, DELAY);
  }

  state = {
    source: JSON.stringify(sample, undefined, 2),
    form: sample,
    error: null,
  };

  updateForm = () => {
    try {
      const { source } = this.state;
      const form = formBuilder(source);
      this.setState({ form, error: null });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleChange = source => {
    this.setState({ source }, () => {
      this.updateFormDebounced();
    });
  };

  render() {
    const { source, form, error } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>Playground</div>
        <div className={styles.content}>
          <div className={styles.editor}>
            {error && (
              <ErrorMessage error={{ commonMessage: error.toString() }} />
            )}
            <CodeEditor
              className={styles.input}
              source={source}
              onChange={this.handleChange}
            />
            <button className={styles.add} />
          </div>
          <div className={styles.form}>
            <Form form={form} />
          </div>
        </div>
      </div>
    );
  }
}
