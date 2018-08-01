// @flow

const createForm = (
  submit: ?(string | Object),
  fields: Array<Object>,
  description?: string
) => {
  let submitField = submit;
  if (typeof submit === 'string') {
    submitField = { caption: submit };
  }
  return {
    name: 'Form',
    description,
    submit: submitField,
    fields,
  };
};

export const trivia = createForm(
  {
    caption: 'Next',
    justify: 'center',
  },
  [
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
      placeholder: 'Optional Incorrect Answer',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    },
  ],
  'Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked,  and two answers should be incorrect.'
);

export const input = createForm('Next', [
  {
    name: 'text',
    type: 'text',
    placeholder: 'Simple text field',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password field',
  },
  {
    name: 'number',
    type: 'number',
    placeholder: 'Number field',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email field',
  },
]);

export const article = createForm('Got it', [
  {
    name: 'article',
    type: 'article',
    title: 'Article title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
]);

export const checkbox = createForm('I Agree', [
  {
    name: 'checkbox',
    type: 'checkbox',
    validation: ['isRequired'],
    label: 'simple checkbox',
  },
]);

export const select = createForm(
  {
    caption: 'Next',
    justify: 'center',
  },
  [
    {
      name: 'select',
      type: 'select',
      options: [
        { id: 'A', caption: 'Option 1' },
        { id: 'b', caption: 'Option 2' },
        { id: '3', caption: 'Option 2' },
        { id: 'IV', caption: 'Option 4' },
      ],
    },
  ],
  'Select one'
);
