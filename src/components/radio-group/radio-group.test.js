import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { RadioGroup } from './radio-group';
import { Radio } from '../radio';

fdescribe('RadioGroup', () => {
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

  it('renders its children with its onChange prop', () => {
    const innerRadios = root.find('input[type="radio"]');
    expect(innerRadios.everyWhere(r => r.prop('onChange') === onChange)).toBe(true);
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
  });
});
