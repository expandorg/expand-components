import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../src/components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
