import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@gemsorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground';

import readme from './readme.md';

const richText = {
  modules: [
    {
      name: 'paragraph-2',
      type: 'richText',
      align: 'left',
      content: `
        In this task you should describe short video fragments, that can be described by none, one or several tags. <b>Please note: you should select ALL relevant tags to the video!</b> All tags are related to the shooting feature and the camera's behavior: <br /><hr /> <div><a href="http://www.gettyimages.com/videos/slow-motion?family&#61;creative&amp;license&#61;rf&amp;phrase&#61;slow%20motion&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Slow Motion</a>  - this tag means that video has a slowing effect. Note that this effect can sometimes be noticeable very weakly, for example, as <a href="http://media.gettyimages.com/videos/portrait-confident-creative-designer-texting-with-cell-phone-in-video-id820817094" target="_blank" rel="nofollow noopener noreferrer">here</a>:</div><div> <img src="http://gifok.net/images/2018/06/28/ezgif.com-gif-maker.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif7.gif" alt="" /> </div> <hr /><br /> <div><a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;lockdown&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Lockdown</a> - this tag means that video was taken with a strictly fixed position of the camera. This definition is strictly opposite to the meaning of all tags below, so Lockdown is incompatible with any of them. </div> <img src="http://gifok.net/images/2018/06/28/ezgif.com-video-to-gif.gif" alt="" /><img src="http://gifok.net/images/2018/06/28/ezgif.com-optimize.gif" alt="" /> <div> If the camera makes even barely noticeable fluctuations, you shouldn't set the Lockdown tag:</div><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif14.gif" alt="" width="319" height="180" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif15.gif" alt="" width="319" height="180" /><br /><br /><div>Note that none of the tags are suitable for the two above fragments.</div><hr /><br /> <div>In contrast to the previous tag (Lockdown), tags from the following group mean that the camera is in motion: <a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;tilt%20up&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Tilt Up</a>/<a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;tilt%20down&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Tilt Down</a> - movement of the camera up / down:<br /></div><div><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif1.gif" alt="" width="343" height="180" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif2.gif" alt="" width="319" height="180" /></div><div><br /></div><div><a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;panning&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Panning</a>  - movement of the camera from left to right or vice versa (ie panoramic shooting, when the coverage of the scene is greater than what a person can see at a time (180 degrees)):</div><div><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif3.gif" alt="" width="319" height="180" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif4.gif" alt="" width="319" height="180" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif12.gif" alt="" width="319" height="180" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif13.gif" alt="" width="319" height="180" /></div><div><br /></div><div> Slightly more common tag: <a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;dolly%20shot&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Dolly Shot</a>, i.e. shooting from the <a href="https://en.wikipedia.org/wiki/Dolly_grip" target="_blank" rel="nofollow noopener noreferrer">operator's trolley</a> or shooting imitating it:</div><div><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif8.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif9.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif10.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif11.gif" alt="" /></div><br /><div>It is important here that the camera moves, and not only rotates, as in the second example to the previous tag (Panning). Note that on the first video there is also a Panning tag, on the second one only Dolly Shot (because the camera is moving, but the scope of the scene is not more than 180 degrees).<br /><br />On some videos it is obvious that the survey is conducted on behalf of an object: a car, an airplane, a person, a bicyclist. In such cases you can see characteristic oscillations and certain parts of the object, on whose behalf the survey is being conducted, then the Dolly Shot tag does not fit, but the Point of View tag is needed:</div><div></div><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif16.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif17.gif" alt="" /> <div>It is also important here that the shooting should be done in motion.</div><hr /><br /> <div>The last two tags are <a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;zoom%20in&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Zoom In</a> and <a href="http://www.gettyimages.com/search/filmmaker?family&#61;creative&amp;phrase&#61;zoom%20out&amp;photographer&#61;pressmaster&amp;sort&#61;best#license" target="_blank" rel="nofollow noopener noreferrer">Zoom Out</a>, i.e. shooting with zoom:</div><div><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif5.gif" alt="" /><img src="http://pascal3.digipro.ru/images/.toloka/video_manual/gif6.gif" alt="" /></div>
      `,
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Got it',
    },
  ],
};

const text = {
  modules: [
    {
      name: 'paragraph-2',
      type: 'text',
      style: 'h1',
      align: 'left',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Got it',
    },
  ],
};

storiesOf('Form Builder/Modules', module)
  .add('Text', () => (
    <Panel>
      <Markdown doc={readme} />
      <Playground form={text} editMode="edit" vertical />
    </Panel>
  ))
  .add('Rich Text', () => (
    <Panel>
      <Markdown doc={readme} />
      <Playground form={richText} editMode="edit" vertical />
    </Panel>
  ));
