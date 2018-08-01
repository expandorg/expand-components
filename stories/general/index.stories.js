import React from 'react';

import { storiesOf } from '@storybook/react';

import panelDecorator from '../kit/panelDecorator';

import Introduction from './Introduction';
import Colors from './Colors';
import Typography from './Typography';

storiesOf('Gems UI', module)
  .addDecorator(panelDecorator)
  .add('Introduction', () => <Introduction />)
  .add('Colors', () => <Colors />)
  .add('Typography', () => <Typography />);
