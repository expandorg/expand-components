import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Kind from '../kit/Kind';

import FormSequence from './FormSequence/FormSequence';

const createForm = (src, answers) => ({
  modules: [
    {
      name: 'video',
      type: 'video',
      src,
    },
    {
      name: 'question',
      type: 'question',
      title: answers ? undefined : 'QUESTION:',
      content: answers
        ? 'Effects used in this video:'
        : 'What effects were used in this video?',
    },
    {
      name: 'effects',
      type: 'multiselect',
      columns: 3,
      readOnly: answers && true,
      answers,
      options: [
        { caption: 'Panning', hint: 'Panning' },
        { caption: 'Tilt Up', hint: 'Tilt Up' },
        { caption: 'Zoom In', hint: 'Zoom In' },
        { caption: 'Lockdown', hint: 'Lockdown' },
        { caption: 'Zoom Out', hint: 'Zoom Out' },
        { caption: 'Tilt Down', hint: 'Tilt Down' },
        { caption: 'Dolly Shot', hint: 'Dolly Shot' },
        { caption: 'Slow Motion', hint: 'Slow Motion' },
        { caption: 'Point of View', hint: 'Point of View' },
      ],
      validation: answers
        ? undefined
        : {
            isRequired: 'Please, select at least one option',
          },
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
});

const forms = [
  createForm('http://media.gettyimages.com/videos/cap-video-idmr_00101274', [
    'Panning',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id475859895', [
    'Tilt Up',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id641818916', [
    'Zoom In',
    'Zoom Out',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id854827116', [
    'Lockdown',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id896606100', [
    'Tilt Down',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id530782170', [
    'Dolly Shot',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id640830260', [
    'Slow Motion',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id864038046', [
    'Tilt Up',
    'Point of View',
  ]),
  createForm('http://media.gettyimages.com/videos/cap-video-id864038046'),
  createForm('http://media.gettyimages.com/videos/cap-video-id498289390'),
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Thank you',
        content: 'Thank you for participating',
      },
    ],
  },
];

storiesOf('Form Builder/Examples', module).add('Video Onboarding', () => (
  <Panel>
    <Kind title="Video Onboarding example">
      <FormSequence forms={forms} />
    </Kind>
  </Panel>
));
