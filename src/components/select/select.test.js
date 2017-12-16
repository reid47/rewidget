import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Select } from './select';

describe('Select', () => {
  let root;

  beforeEach(() => {
    root = mount(<Select>
      <option value="1">one</option>
      <option value="2">two</option>
      <option value="3">three</option>
    </Select>);
  });

  it('renders a simple select by default', () => {
    const outerEl = root.find('select.rw-Select');
    expect(outerEl.exists()).toBe(true);

    const options = root.find('option');
    expect(options.length).toBe(3);
    expect(options.at(0).text()).toBe('one');
    expect(options.at(1).text()).toBe('two');
    expect(options.at(2).text()).toBe('three');
  });

  describe('when a className prop is given', () => {
    beforeEach(() => {
      root.setProps({className: 'some-class'});
    });

    it('sets the className on the outer element', () => {
      const outerEl = root.find('select.rw-Select');
      expect(outerEl.hasClass('some-class')).toBe(true);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({size: 'sm'});
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('select.rw-Select');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const onChange = () => 23;

    beforeEach(() => {
      root.setProps({onClick, onChange});
    });

    it('puts the additional props on the inner input', () => {
      const el = root.find('select');
      expect(el.prop('onClick')).toBe(onClick);
      expect(el.prop('onChange')).toBe(onChange);
    });
  });
});
