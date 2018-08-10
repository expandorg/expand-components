const trivia = {
  modules: [
    {
      name: 'description',
      type: 'description',
      content:
        'Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked, and two answers should be incorrect.',
    },
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
};

export default trivia;
