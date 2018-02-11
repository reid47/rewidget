import React from 'react';
import { mount } from 'enzyme';
import { TextInput } from './text-input';

describe('TextInput', () => {
  let root;

  beforeEach(() => {
    root = mount(<TextInput />);
  });

  it('renders a basic text input by default', () => {
    const wrapper = root.find('div.rw-TextInput');
    expect(wrapper.exists()).toBe(true);

    const input = root.find('input.rw-TextInput-input');
    expect(input.exists()).toBe(true);
    expect(input.is('[type="text"]')).toBe(true);
  });

  describe('when password prop is true', () => {
    beforeEach(() => {
      root.setProps({ password: true });
    });

    it('renders a password input', () => {
      const input = root.find('input.rw-TextInput-input');
      expect(input.is('[type="password"]')).toBe(true);
    });
  });

  describe('when a className is given', () => {
    beforeEach(() => {
      root.setProps({ className: 'some-class' });
    });

    it('puts the className on the outer element', () => {
      const el = root.find('div.rw-TextInput');
      expect(el.hasClass('some-class')).toBe(true);
    });
  });

  describe('when an inputClassName is given', () => {
    beforeEach(() => {
      root.setProps({ inputClassName: 'some-input-class' });
    });

    it('puts the inputClassName on the input', () => {
      const input = root.find('input.rw-TextInput-input');
      expect(input.hasClass('some-input-class')).toBe(true);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({ size: 'sm' });
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('div.rw-TextInput');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });

    it('gives the input element the is-size-sm class', () => {
      const el = root.find('input.rw-TextInput-input');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when given an onChange', () => {
    const onChange = jest.fn();

    beforeEach(() => {
      root.setProps({ onChange });
      root
        .find('input')
        .simulate('change', { target: { value: 'a new value' } });
    });

    it('calls the onChange with the new value', () => {
      expect(onChange).toBeCalledWith('a new value');
    });
  });

  describe('when given additional props', () => {
    const placeholder = 'some placeholder';
    const onFocus = () => 47;

    beforeEach(() => {
      root.setProps({ placeholder, onFocus });
    });

    it('puts the additional props on the inner input', () => {
      const input = root.find('input[type="text"]');
      expect(input.prop('placeholder')).toBe(placeholder);
      expect(input.prop('onFocus')).toBe(onFocus);
    });
  });

  describe('when an icon is given', () => {
    const icon = <span className="some-icon">?</span>;

    beforeEach(() => {
      root.setProps({ icon });
    });

    it('renders the icon alongside the input', () => {
      const iconEl = root.find('div.rw-TextInput-icon .some-icon');
      expect(iconEl.exists()).toBe(true);
    });

    it('gives the icon role="presentation"', () => {
      const iconEl = root.find('div.rw-TextInput-icon');
      expect(iconEl.prop('role')).toBe('presentation');
    });

    it('adds the has-icon class to the input', () => {
      const input = root.find('input[type="text"]');
      expect(input.hasClass('has-icon')).toBe(true);
    });
  });

  describe('when multiline is true', () => {
    beforeEach(() => {
      root.setProps({ multiline: true });
    });

    it('renders a textarea', () => {
      const textarea = root.find('textarea.rw-TextInput-input');
      expect(textarea.exists()).toBe(true);
      expect(textarea.hasClass('is-multiline')).toBe(true);
      expect(textarea.prop('rows')).toBe(2);
    });

    describe('when given a rows prop', () => {
      beforeEach(() => {
        root.setProps({ rows: 5 });
      });

      it('sets the rows prop on the textarea', () => {
        const textarea = root.find('textarea.rw-TextInput-input');
        expect(textarea.prop('rows')).toBe(5);
      });
    });

    describe('when given an onChange', () => {
      const onChange = jest.fn();

      beforeEach(() => {
        root.setProps({ onChange });
        root
          .find('textarea')
          .simulate('change', { target: { value: 'a new value' } });
      });

      it('calls the onChange with the new value', () => {
        expect(onChange).toBeCalledWith('a new value');
      });
    });

    describe('when given additional props', () => {
      const placeholder = 'some placeholder';
      const onFocus = () => 47;

      beforeEach(() => {
        root.setProps({ placeholder, onFocus });
      });

      it('puts the additional props on the inner textarea', () => {
        const textarea = root.find('textarea');
        expect(textarea.prop('placeholder')).toBe(placeholder);
        expect(textarea.prop('onFocus')).toBe(onFocus);
      });
    });
  });
});
