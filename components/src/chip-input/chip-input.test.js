import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { ChipInput } from './chip-input';

describe('ChipInput', () => {
  let root;

  beforeEach(() => {
    root = mount(<ChipInput values={['One', 'Two', 'Three']}/>);
  });

  it('renders a basic chip input by default', () => {
    const wrapper = root.find('div.rw-ChipInput');
    expect(wrapper.exists()).toBe(true);

    const input = root.find('input.rw-ChipInput-input');
    expect(input.exists()).toBe(true);
    expect(input.is('[type="text"]')).toBe(true);
  });
});
