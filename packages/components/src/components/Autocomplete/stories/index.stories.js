import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Kind,
  StateProvider,
  panelDecorator,
  Markdown,
} from '@expandorg/uikit/stories/kit';

import readme from './readme.md';

import { AutocompleteInput } from '../index';

const options = [
  'red',
  'gren',
  'blue',
  'yellow',
  'magenta',
  'white',
  'black',
  'gray',
  'brown',
];

storiesOf('UI Components/Autocomplete', module)
  .addDecorator(panelDecorator)
  .add('default', () => {
    const type = action('type');
    return (
      <div>
        <Kind title="Autocomplete">
          <StateProvider initial="">
            {(value, onChange) => (
              <AutocompleteInput
                placeholder="Type..."
                value={value}
                onChange={evt => {
                  onChange(evt.target.value);
                  type(evt);
                }}
                onSelect={onChange}
                options={options}
              />
            )}
          </StateProvider>
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  })
  .add('with clear', () => {
    const type = action('type');
    return (
      <div>
        <Kind title="Input">
          <StateProvider initial="">
            {(value, onChange) => (
              <AutocompleteInput
                placeholder="Type..."
                value={value}
                clear
                onChange={evt => {
                  onChange(evt.target.value);
                  type(evt);
                }}
                onSelect={onChange}
                options={options}
              />
            )}
          </StateProvider>
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  })
  .add('allow add new', () => {
    const type = action('type');
    return (
      <div>
        <Kind title="Autocomplete">
          <StateProvider initial="">
            {(value, onChange) => (
              <AutocompleteInput
                placeholder="Type..."
                value={value}
                clear
                allowAdd
                onChange={evt => {
                  onChange(evt.target.value);
                  type(evt);
                }}
                onSelect={onChange}
                options={options}
              />
            )}
          </StateProvider>
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  });
