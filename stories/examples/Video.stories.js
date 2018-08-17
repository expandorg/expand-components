import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Kind from '../kit/Kind';

import FormSequence from './FormSequence/FormSequence';

const createForm = src => ({
  modules: [
    {
      name: 'video',
      type: 'video',
      height: 360,
      autoPlay: true,
      src,
    },
    {
      name: 'question',
      type: 'question',
      title: 'QUESTION:',
      content: 'What effects were used in this video?',
    },
    {
      name: 'effects',
      type: 'multiselect',
      columns: 3,
      options: [
        {
          caption: 'Panning',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-idmr_00101274',
            message: 'Panning',
          },
        },
        {
          caption: 'Tilt Up',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id475859895',
            message: 'Tilt Up',
          },
        },
        {
          caption: 'Zoom In',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id641818916',
            message: 'Zoom In',
          },
        },
        {
          caption: 'Lockdown',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id854827116',
            message: 'Lockdown',
          },
        },
        {
          caption: 'Zoom Out',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id641818916',
            message: 'Zoom Out',
          },
        },
        {
          caption: 'Tilt Down',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
            message: 'Tilt Down',
          },
        },
        {
          caption: 'Dolly Shot',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id530782170',
            message: 'Dolly Shot',
          },
        },
        {
          caption: 'Slow Motion',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id640830260',
            message: 'Slow Motion',
          },
        },
        {
          caption: 'Point of View',
          hint: {
            type: 'video',
            src: 'http://media.gettyimages.com/videos/cap-video-id864038046',
            message: 'Point of View',
          },
        },
      ],
      validation: {
        isRequired: 'Please, select at least one option',
      },
    },
    {
      name: 'instructions',
      type: 'instructions',
      dialogs: [
        {
          action: 'See instructions',
          title: 'Instructions',
          content: '123',
        },
        {
          action: 'See Rules',
          title: 'Rules',
          content: '123',
        },
      ],
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
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Intro',
        content: `
          In this task you should describe short video fragments, that can be described by none,
          one or several tags. <b>Please note: you should select ALL relevant tags to the video!</b> All tags are
          related to the shooting feature and the camera's behavior: <br /><hr />
        `,
      },
      {
        name: 'submit',
        type: 'submit',
        caption: 'Got it',
      },
    ],
  },
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Intro',
        content: `
          In this task you should describe short video fragments, that can be described by none,
          one or several tags. <b>Please note: you should select ALL relevant tags to the video!</b> All tags are
          related to the shooting feature and the camera's behavior: <br /><hr />
        `,
      },
      {
        name: 'submit',
        type: 'submit',
        caption: 'Got it',
      },
    ],
  },
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Rules',
        content: `In this task you should describe short video fragments, that can be described by none,`,
      },
      {
        name: 'rules',
        type: 'agreement',
        button: 'Rules',
        label: 'I agree',
        headline: 'Rules',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      },
      {
        name: 'submit',
        type: 'submit',
        caption: 'Got it',
      },
    ],
  },
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
