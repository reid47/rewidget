import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { TextInput } from './text-input';

describe('TextInput', () => {
  let root;

  beforeEach(() => {
    root = mount(<TextInput />);
  });

  it('renders a basic text input by default', () => {
    const input = root.find('input.rw-TextInput');
    expect(input.exists()).toBe(true);
    expect(input.is('[type="text"]')).toBe(true);
  });

  describe('when password prop is true', () => {
    beforeEach(() => {
      root.setProps({password: true});
    });

    it('renders a password input', () => {
      const input = root.find('input.rw-TextInput');
      expect(input.is('[type="password"]')).toBe(true);
    });
  });

  describe('when a className is given', () => {
    beforeEach(() => {
      root.setProps({className: 'some-class'});
    });

    it('puts the className on the input', () => {
      const input = root.find('input.rw-TextInput');
      expect(input.hasClass('some-class')).toBe(true);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({size: 'sm'});
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('input.rw-TextInput');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when given an onChange', () => {
    const onChange = jest.fn();

    beforeEach(() => {
      root.setProps({onChange});
      root.find('input').simulate('change', {target: {value: 'a new value'}});
    });

    it('calls the onChange with the new value', () => {
      expect(onChange).toBeCalledWith('a new value');
    });
  });

  describe('when given additional props', () => {
    const placeholder = 'some placeholder';
    const onFocus = () => 47;

    beforeEach(() => {
      root.setProps({placeholder, onFocus});
    });

    it('puts the additional props on the inner input', () => {
      const input = root.find('input[type="text"]');
      expect(input.prop('placeholder')).toBe(placeholder);
      expect(input.prop('onFocus')).toBe(onFocus);
    });
  });

  describe('when multiline is true', () => {
    beforeEach(() => {
      root.setProps({multiline: true});
    });

    it('renders a textarea', () => {
      const textarea = root.find('textarea.rw-TextInput');
      expect(textarea.exists()).toBe(true);
      expect(textarea.hasClass('is-multiline')).toBe(true);
      expect(textarea.prop('rows')).toBe(2);
    });

    describe('when given a rows prop', () => {
      beforeEach(() => {
        root.setProps({rows: 5});
      });

      it('sets the rows prop on the textarea', () => {
        const textarea = root.find('textarea.rw-TextInput');
        expect(textarea.prop('rows')).toBe(5);
      });
    });

    describe('when given an onChange', () => {
      const onChange = jest.fn();

      beforeEach(() => {
        root.setProps({onChange});
        root.find('textarea').simulate('change', {target: {value: 'a new value'}});
      });

      it('calls the onChange with the new value', () => {
        expect(onChange).toBeCalledWith('a new value');
      });
    });

    describe('when given additional props', () => {
      const placeholder = 'some placeholder';
      const onFocus = () => 47;

      beforeEach(() => {
        root.setProps({placeholder, onFocus});
      });

      it('puts the additional props on the inner textarea', () => {
        const textarea = root.find('textarea');
        expect(textarea.prop('placeholder')).toBe(placeholder);
        expect(textarea.prop('onFocus')).toBe(onFocus);
      });
    });
  });
});
