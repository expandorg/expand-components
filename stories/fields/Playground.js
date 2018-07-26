import React, { Component } from 'react';
import debounce from 'debounce';

import styles from './Playground.module.styl';

import Textarea from '../../src/components/Textarea';
import Form from './Form';

const DELAY = 300;

export default class Playground extends Component {
  updateForm = debounce(() => {
    let form = null;
    try {
      const { text } = this.state;
      form = JSON.parse(text);
    } catch (e) {}
    if (form) {
      this.setState({
        form: {
          description: form.description || '',
          fields: form.fields || [],
        },
      });
    }
  }, DELAY);

  state = {
    text: `{
      "name": "Trivia",
      "description": "Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked,  and two answers should be incorrect.",
      "fields": [{
        "name": "question",
        "type": "text",
        "validation": ["isRequired"],
        "placeholder": "Question"
      }, {
        "name": "correctAnswer",
        "type": "text",
        "validation": ["isRequired"],
        "placeholder": "Correct Answer"
      }, {
        "name": "incorrectAnswerA",
        "type": "text",
        "validation": ["isRequired"],
        "placeholder": "Incorrect Answer"
      }, {
        "name": "incorrectAnswerB",
        "type": "text",
        "validation": ["isRequired"],
        "placeholder": "Incorrect Answer"
      }, {
        "name": "article",
        "type": "article",
        "title": "title",
        "content": "Article content"
      }]
    }`,
    form: {
      name: 'Trivia',
      description: `Write a trivia question with three multiple-choice answers.
                    One answer should be correct and fact-checked, and
                    two answers should be incorrect.`,
      fields: [
        {
          name: 'question',
          type: 'text',
          validation: ['isRequired'],
          placeholder: 'Question',
        },
        {
          name: 'correctAnswer',
          type: 'text',
          validation: ['isRequired'],
          placeholder: 'Correct Answer',
        },
        {
          name: 'incorrectAnswerA',
          type: 'text',
          validation: ['isRequired'],
          placeholder: 'Incorrect Answer',
        },
        {
          name: 'incorrectAnswerB',
          type: 'text',
          validation: ['isRequired'],
          placeholder: 'Incorrect Answer',
        },
        {
          name: 'article',
          type: 'article',
          title: 'title',
          content: 'Article content',
        },
      ],
    },
  };

  handleChange = ({ target }) => {
    this.setState({ text: target.value }, this.updateForm);
  };

  render() {
    const { text, form } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>Playground</div>
        <div className={styles.content}>
          <div className={styles.text}>
            <Textarea
              className={styles.input}
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.form}>
            <Form form={form} />
          </div>
        </div>
      </div>
    );
  }
}
