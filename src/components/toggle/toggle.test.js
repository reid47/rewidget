import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Toggle } from './toggle';

describe('Toggle', () => {
  let root;

  beforeEach(() => {
    root = mount(<Toggle>Check me</Toggle>);
  });

  it('renders a simple toggle by default', () => {
    const outerEl = root.find('span.rw-Toggle');
    expect(outerEl.exists()).toBe(true);

    const innerCb = root.find('span.rw-Toggle input[type="checkbox"]');
    expect(innerCb.exists()).toBe(true);
    expect(innerCb.hasClass('rw-Toggle-input')).toBe(true);

    const label = root.find('span.rw-Toggle label');
    expect(label.exists()).toBe(true);
  });

  it('places the children inside the label', () => {
    const label = root.find('span.rw-Toggle label');
    expect(label.text()).toBe('Check me');
  });

  describe('when an id prop is given', () => {
    beforeEach(() => {
      root.setProps({id: 'some-id'});
    });

    it('sets the input id and label for attributes', () => {
      const innerCb = root.find('span.rw-Toggle input[type="checkbox"]');
      expect(innerCb.is('#some-id')).toBe(true);
      const label = root.find('span.rw-Toggle label');
      expect(label.prop('htmlFor')).toBe('some-id');
    });
  });

  describe('when an inputClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({inputClassName: 'some-input-class'});
    });

    it('sets the className on the inner Toggle', () => {
      const innerCb = root.find('input[type="checkbox"]');
      expect(innerCb.hasClass('rw-Toggle-input some-input-class')).toBe(true);
    });
  });

  describe('when a labelClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({labelClassName: 'some-label-class'});
    });

    it('sets the className on the inner label', () => {
      const label = root.find('label');
      expect(label.hasClass('rw-Toggle-label some-label-class')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const onChange = () => 23;

    beforeEach(() => {
      root.setProps({onClick, onChange});
    });

    it('puts the additional props on the inner input', () => {
      const el = root.find('input[type="checkbox"]');
      expect(el.prop('onClick')).toBe(onClick);
      expect(el.prop('onChange')).toBe(onChange);
    });
  });
});
