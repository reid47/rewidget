import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Radio } from './radio';

describe('Radio', () => {
  let root;

  beforeEach(() => {
    root = mount(<Radio>Check me</Radio>);
  });

  it('renders a simple radio by default', () => {
    const outerEl = root.find('span.rw-Radio');
    expect(outerEl.exists()).toBe(true);

    const innerCb = root.find('span.rw-Radio input[type="radio"]');
    expect(innerCb.exists()).toBe(true);
    expect(innerCb.hasClass('rw-Radio-input')).toBe(true);

    const label = root.find('span.rw-Radio label');
    expect(label.exists()).toBe(true);
  });

  it('places the children inside the label', () => {
    const label = root.find('span.rw-Radio label');
    expect(label.text()).toBe('Check me');
  });

  describe('when an id prop is given', () => {
    beforeEach(() => {
      root.setProps({id: 'some-id'});
    });

    it('sets the input id and label for attributes', () => {
      const innerCb = root.find('span.rw-Radio input[type="radio"]');
      expect(innerCb.is('#some-id')).toBe(true);
      const label = root.find('span.rw-Radio label');
      expect(label.prop('htmlFor')).toBe('some-id');
    });
  });

  describe('when an inputClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({inputClassName: 'some-input-class'});
    });

    it('sets the className on the inner radio', () => {
      const innerCb = root.find('input[type="radio"]');
      expect(innerCb.hasClass('rw-Radio-input some-input-class')).toBe(true);
    });
  });

  describe('when a labelClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({labelClassName: 'some-label-class'});
    });

    it('sets the className on the inner label', () => {
      const label = root.find('label');
      expect(label.hasClass('rw-Radio-label some-label-class')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const onChange = () => 23;

    beforeEach(() => {
      root.setProps({onClick, onChange});
    });

    it('puts the additional props on the inner input', () => {
      const btn = root.find('input[type="radio"]');
      expect(btn.prop('onClick')).toBe(onClick);
      expect(btn.prop('onChange')).toBe(onChange);
    });
  });
});
