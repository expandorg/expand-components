import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Kind from '../kit/Kind';

import FormSequence from './FormSequence/FormSequence';

const collapsable = (header, content, src) => ({
  name: header,
  type: 'collapsable',
  header,
  modules: [
    {
      name: 'article',
      type: 'article',
      content,
    },
    {
      name: 'video',
      type: 'video',
      src,
    },
  ],
});

const examples = [
  collapsable(
    'Slow Motion',
    'Slow Motion - this tag means that video has a slowing effect. Note that this effect can sometimes be noticeable very weakly, for example, as',
    'http://media.gettyimages.com/videos/cap-video-id849554552'
  ),
  collapsable(
    'Lockdown',
    'Lockdown - this tag means that video was taken with a strictly fixed position of the camera. This definition is strictly opposite to the meaning of all tags below, so Lockdown is incompatible with any of them.',
    'http://media.gettyimages.com/videos/cap-video-id854827116'
  ),
  collapsable(
    'Tilt Up/Tilt Down',
    'In contrast to the previous tag (Lockdown), tags from the following group mean that the camera is in motion: Tilt Up/Tilt Down - movement of the camera up / down:',
    'http://media.gettyimages.com/videos/cap-video-id475859895'
  ),
  collapsable(
    'Panning',
    'Panning - movement of the camera from left to right or vice versa (ie panoramic shooting, when the coverage of the scene is greater than what a person can see at a time (180 degrees)):',
    'http://media.gettyimages.com/videos/cap-video-idmr_00101274'
  ),
  collapsable(
    'Dolly Shot',
    `Slightly more common tag: Dolly Shot, i.e. shooting from the operators trolley or shooting imitating it:
    It is important here that the camera moves, and not only rotates, as in the second example to the previous tag (Panning). Note that on the first video there is also a Panning tag, on the second one only Dolly Shot (because the camera is moving, but the scope of the scene is not more than 180 degrees).`,
    'http://media.gettyimages.com/videos/cap-video-id530782170'
  ),
  collapsable(
    'Point of View',
    `On some videos it is obvious that the survey is conducted on behalf of an object: a car, an airplane, a person, a bicyclist. In such cases you can see characteristic oscillations and certain parts of the object, on whose behalf the survey is being conducted, then the Dolly Shot tag does not fit, but the Point of View tag is needed:
    It is also important here that the shooting should be done in motion.`,
    'http://media.gettyimages.com/videos/cap-video-id864038046'
  ),
  collapsable(
    'Zoom In/Zoom Out',
    'The last two tags are Zoom In and Zoom Out, i.e. shooting with zoom:',
    'http://media.gettyimages.com/videos/cap-video-id641818916'
  ),
];

const option = (caption, src) => ({
  caption,
  hint: {
    type: 'video',
    src,
    message: caption,
  },
});

const createForm = (src, total, index) => ({
  modules: [
    {
      name: 'progress',
      type: 'progress',
      total,
      number: index,
    },
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
        option(
          'Panning',
          'http://media.gettyimages.com/videos/cap-video-idmr_00101274'
        ),
        option(
          'Tilt Up',
          'http://media.gettyimages.com/videos/cap-video-id475859895'
        ),
        option(
          'Zoom In',
          'http://media.gettyimages.com/videos/cap-video-id641818916'
        ),
        option(
          'Lockdown',
          'http://media.gettyimages.com/videos/cap-video-id854827116'
        ),
        option(
          'Zoom Out',
          'http://media.gettyimages.com/videos/cap-video-id641818916'
        ),
        option(
          'Tilt Down',
          'http://media.gettyimages.com/videos/cap-video-id896606100'
        ),
        option(
          'Dolly Shot',
          'http://media.gettyimages.com/videos/cap-video-id530782170'
        ),
        option(
          'Slow Motion',
          'http://media.gettyimages.com/videos/cap-video-id849554552'
        ),
        option(
          'Point of View',
          'http://media.gettyimages.com/videos/cap-video-id864038046'
        ),
      ],
      validation: {
        isRequired: 'Please, select at least one option',
      },
    },
    {
      name: 'instructions',
      type: 'instructions',
      modules: [
        {
          type: 'instructionsItem',
          name: 'instructions',
          action: 'See instructions',
          title: 'Instructions',
          modules: [
            {
              name: 'paragraph',
              type: 'paragraph',
              content: `Please familiar yourself with the different types of camera behavior that you will identify. Information regarding the camera behavior is below.`,
            },
            ...examples,
          ],
        },
        {
          type: 'instructionsItem',
          name: 'rules',
          action: 'See Rules',
          title: 'Rules',
          modules: {
            name: 'paragraph',
            type: 'paragraph',
            content: '123',
          },
        },
      ],
    },
    {
      name: 'submit',
      type: 'submit',
      justify: 'center',
      caption: 'Submit',
    },
  ],
});

const questions = [
  'http://media.gettyimages.com/videos/cap-video-id498515049',
  'http://media.gettyimages.com/videos/cap-video-id523299420',
].map((src, index, array) => createForm(src, array.length, index + 1));

const forms = [
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Task',
        content: `
          In this task you will identify the different camera behavior in short video segments.
          Each video can be described by none, one or several tags. Please note: you should select ALL relevant tags to the video.
        `,
      },
      {
        name: 'submit',
        type: 'submit',
        caption: 'Next',
      },
    ],
  },
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Rules',
        content: `In beginning to this task you agree to the rules, terms and conditions, and privacy policy below.`,
      },
      {
        name: 'rules',
        type: 'agreement',
        button: 'Rules',
        label: 'I agree',
        headline: 'Rules',
        modules: {
          type: 'paragraph',
          name: 'content',
          content: 'Lorem ipsum dolor sit amet, consectetur',
        },
      },
      {
        name: 'submit',
        type: 'submit',
        caption: 'Next',
      },
    ],
  },
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Instructions',
        content: `Please familiar yourself with the different types of camera behavior that you will identify. Information regarding the camera behavior is below.`,
      },
      ...examples,
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
        title: 'Test',
        content: `
          Before completing this task you will have to take a test where you identify the camera behavior in 15 randomized videos.
          You will have 2 tries to take the test. Only participants who receive 100% on the test will be eligible to continue to the task.
          The test is not paid. You are also forbidden from sharing answers on the test.
        `,
      },
      {
        name: 'submit',
        type: 'submit',
        caption: 'Begin',
      },
    ],
  },
  ...questions,
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
    <FormSequence title="Video Onboarding example" forms={forms} />
  </Panel>
));
