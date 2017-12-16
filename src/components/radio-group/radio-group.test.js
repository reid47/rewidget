import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { RadioGroup } from './radio-group';
import { Radio } from '../radio';

describe('RadioGroup', () => {
  let root;
  const onChange = jest.fn();

  beforeEach(() => {
    root = mount(<RadioGroup name="some-group" onChange={onChange}>
      <Radio value="0">Option 0</Radio>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
    </RadioGroup>);
  });

  it('renders its children with its name prop', () => {
    const innerRadios = root.find('input[type="radio"]');
    expect(innerRadios.length).toBe(3);
    expect(innerRadios.everyWhere(r => r.prop('name') === 'some-group')).toBe(true);
  });

  describe('when it has a value', () => {
    beforeEach(() => {
      root.unmount();
      root = mount(<RadioGroup name="some-group" value="1" onChange={onChange}>
        <Radio value="0">Option 0</Radio>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>)
    });

    it('sets the checked prop on the corresponding inner radio', () => {
      const radios = root.find('input[type="radio"]');
      expect(radios.at(0).prop('checked')).toBe(false);
      expect(radios.at(1).prop('checked')).toBe(true);
      expect(radios.at(2).prop('checked')).toBe(false);
    });

    describe('when the value changes', () => {
      beforeEach(() => {
        root.find('input').at(2).simulate('change', {target: {checked: true}});
        root.setProps({value: '2'});
      });

      it('sets the checked prop on the corresponding inner radio', () => {
        const radios = root.find('input[type="radio"]');
        expect(radios.at(0).prop('checked')).toBe(false);
        expect(radios.at(1).prop('checked')).toBe(false);
        expect(radios.at(2).prop('checked')).toBe(true);
      });

      it('calls the onChange correctly', () => {
        expect(onChange).toBeCalledWith('2');
      });

      describe('when the value changes again', () => {
        beforeEach(() => {
          root.find('input').at(0).simulate('change', {target: {checked: true}});
          root.setProps({value: '0'});
        });

        it('sets the checked prop on the corresponding inner radio', () => {
          const radios = root.find('input[type="radio"]');
          expect(radios.at(0).prop('checked')).toBe(true);
          expect(radios.at(1).prop('checked')).toBe(false);
          expect(radios.at(2).prop('checked')).toBe(false);
        });

        it('still calls the onChange correctly', () => {
          expect(onChange).toBeCalledWith('0');
        });
      });
    });
  });
});
