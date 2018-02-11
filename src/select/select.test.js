import React from 'react';
import { mount } from 'enzyme';
import { Select } from './select';

describe('Select', () => {
  let root;

  beforeEach(() => {
    root = mount(
      <Select>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
      </Select>
    );
  });

  it('renders a simple select by default', () => {
    const outerEl = root.find('div.rw-Select');
    expect(outerEl.exists()).toBe(true);

    const input = root.find('select.rw-Select-input');
    expect(input.exists()).toBe(true);

    const arrows = root.find('div.rw-Select-arrow');
    expect(arrows.exists()).toBe(true);

    const options = root.find('option');
    expect(options.length).toBe(3);
    expect(options.at(0).text()).toBe('one');
    expect(options.at(1).text()).toBe('two');
    expect(options.at(2).text()).toBe('three');
  });

  describe('when a className prop is given', () => {
    beforeEach(() => {
      root.setProps({ className: 'some-class' });
    });

    it('sets the className on the outer element', () => {
      const outerEl = root.find('div.rw-Select');
      expect(outerEl.hasClass('some-class')).toBe(true);
    });
  });

  describe('when an inputClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({ inputClassName: 'some-input-class' });
    });

    it('sets the className on the inner input element', () => {
      const outerEl = root.find('select.rw-Select-input');
      expect(outerEl.hasClass('some-input-class')).toBe(true);
    });
  });

  describe('when an arrowClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({ arrowClassName: 'some-arrow-class' });
    });

    it('sets the className on the inner arrow element', () => {
      const arrows = root.find('div.rw-Select-arrow');
      expect(arrows.hasClass('some-arrow-class')).toBe(true);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({ size: 'sm' });
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('div.rw-Select');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });

    it('gives the inner element the is-size-sm class', () => {
      const el = root.find('select.rw-Select-input');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const onFocus = () => 23;

    beforeEach(() => {
      root.setProps({ onClick, onFocus });
    });

    it('puts the additional props on the inner input', () => {
      const el = root.find('select');
      expect(el.prop('onClick')).toBe(onClick);
      expect(el.prop('onFocus')).toBe(onFocus);
    });
  });

  describe('when changing selection', () => {
    const onChange = jest.fn();

    beforeEach(() => {
      root.setProps({ onChange });
      root.find('select').simulate('change', { target: { value: '3' } });
    });

    it('calls the onChange callback correctly', () => {
      expect(onChange).toBeCalledWith('3');
    });
  });
});
