import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Kind from '../kit/Kind';

import FormSequence from './FormSequence/FormSequence';

const collapsable = (header, content) => ({
  name: header,
  type: 'collapsable',
  header,
  children: {
    name: 'article',
    type: 'article',
    content,
  },
});

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
  {
    modules: [
      collapsable(
        'Slow Motion',
        'Slow Motion - this tag means that video has a slowing effect. Note that this effect can sometimes be noticeable very weakly, for example, as <img src="http://gifok.net/images/2018/06/28/ezgif.com-gif-maker.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif7.gif" alt="" />'
      ),
      collapsable(
        'Lockdown',
        'Lockdown - this tag means that video was taken with a strictly fixed position of the camera. This definition is strictly opposite to the meaning of all tags below, so Lockdown is incompatible with any of them.'
      ),
      collapsable(
        'Tilt Up/Tilt Down',
        'In contrast to the previous tag (Lockdown), tags from the following group mean that the camera is in motion: Tilt Up/Tilt Down - movement of the camera up / down:'
      ),
      collapsable(
        'Panning',
        'Panning - movement of the camera from left to right or vice versa (ie panoramic shooting, when the coverage of the scene is greater than what a person can see at a time (180 degrees)):'
      ),
      collapsable(
        'Dolly Shot',
        `Slightly more common tag: Dolly Shot, i.e. shooting from the operators trolley or shooting imitating it:
        It is important here that the camera moves, and not only rotates, as in the second example to the previous tag (Panning). Note that on the first video there is also a Panning tag, on the second one only Dolly Shot (because the camera is moving, but the scope of the scene is not more than 180 degrees).
        On some videos it is obvious that the survey is conducted on behalf of an object: a car, an airplane, a person, a bicyclist. In such cases you can see characteristic oscillations and certain parts of the object, on whose behalf the survey is being conducted, then the Dolly Shot tag does not fit, but the Point of View tag is needed:
        It is also important here that the shooting should be done in motion.`
      ),
      collapsable(
        'Zoom In/Zoom Out',
        'The last two tags are Zoom In and Zoom Out, i.e. shooting with zoom:'
      ),
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
