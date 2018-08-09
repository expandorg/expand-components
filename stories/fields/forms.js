// @flow

const createForm = (fields: Array<Object>, description?: string) => ({
  description,
  fields,
});

export const trivia = createForm(
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
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
  'Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked,  and two answers should be incorrect.'
);

export const input = createForm([
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
  {
    name: 'submit',
    type: 'submit',
    caption: 'Next',
  },
]);

export const article = createForm([
  {
    name: 'article',
    type: 'article',
    title: 'Article title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    name: 'submit',
    type: 'submit',
    caption: 'Got it',
  },
]);

export const checkbox = createForm([
  {
    name: 'checkbox',
    type: 'checkbox',
    validation: ['isRequired'],
    label: 'simple checkbox',
  },
  {
    name: 'submit',
    type: 'submit',
    caption: 'I Agree',
  },
]);

export const select = createForm(
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
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
  'Select one'
);

export const video = createForm(
  [
    {
      name: 'video',
      type: 'video',
      src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
  'Select one'
);
