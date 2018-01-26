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
    const outerEl = root.find('div.rw-Radio');
    expect(outerEl.exists()).toBe(true);

    const innerCb = root.find('div.rw-Radio input[type="radio"]');
    expect(innerCb.exists()).toBe(true);
    expect(innerCb.hasClass('rw-Radio-input')).toBe(true);

    const label = root.find('div.rw-Radio label');
    expect(label.exists()).toBe(true);

    const widget = root.find('span.rw-Radio-widget');
    expect(widget.exists()).toBe(true);
  });

  it('places the children inside the label', () => {
    const label = root.find('div.rw-Radio label');
    expect(label.text()).toBe('Check me');
  });

  it('generates a random unique ID for the input', () => {
    const innerEl = root.find('div.rw-Radio input[type="radio"]');
    expect(innerEl.prop('id')).toMatch(/^radio_/);
    const label = root.find('div.rw-Radio label');
    expect(label.prop('htmlFor')).toBe(innerEl.prop('id'));
  });

  describe('when a className prop is given', () => {
    beforeEach(() => {
      root.setProps({ className: 'some-class' });
    });

    it('sets the className on the outer element', () => {
      const outerEl = root.find('div.rw-Radio');
      expect(outerEl.hasClass('some-class')).toBe(true);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({ size: 'sm' });
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('div.rw-Radio');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when an id prop is given', () => {
    beforeEach(() => {
      root.setProps({ id: 'some-id' });
    });

    it('sets the input id and label for attributes', () => {
      const innerCb = root.find('div.rw-Radio input[type="radio"]');
      expect(innerCb.is('#some-id')).toBe(true);
      const label = root.find('div.rw-Radio label');
      expect(label.prop('htmlFor')).toBe('some-id');
    });
  });

  describe('when an inputClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({ inputClassName: 'some-input-class' });
    });

    it('sets the className on the inner radio', () => {
      const innerCb = root.find('input[type="radio"]');
      expect(innerCb.hasClass('rw-Radio-input some-input-class')).toBe(true);
    });
  });

  describe('when a labelClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({ labelClassName: 'some-label-class' });
    });

    it('sets the className on the inner label', () => {
      const label = root.find('label');
      expect(label.hasClass('rw-Radio-label some-label-class')).toBe(true);
    });
  });

  describe('when a widgetClassName prop is given', () => {
    beforeEach(() => {
      root.setProps({ widgetClassName: 'some-widget-class' });
    });

    it('sets the className on the inner widget', () => {
      const widget = root.find('.rw-Radio-widget');
      expect(widget.hasClass('rw-Radio-widget some-widget-class')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const onFocus = () => 23;
    const value = 'some-value';

    beforeEach(() => {
      root.setProps({ onClick, onFocus, value });
    });

    it('puts the additional props on the inner input', () => {
      const el = root.find('input[type="radio"]');
      expect(el.prop('onClick')).toBe(onClick);
      expect(el.prop('onFocus')).toBe(onFocus);
      expect(el.prop('value')).toBe(value);
    });
  });

  describe('when the value is changed', () => {
    const onChange = jest.fn();

    beforeEach(() => {
      root.setProps({ onChange });
      root.find('input').simulate('change', { target: { checked: true } });
    });

    it('calls the onChange callback with the new value', () => {
      expect(onChange).toBeCalledWith(true);
    });
  });
});
