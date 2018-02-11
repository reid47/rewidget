import React from 'react';
import { mount } from 'enzyme';
import { Chip } from './chip';
import { XIcon } from '../icons';

describe('Chip', () => {
  let root;

  beforeEach(() => {
    root = mount(<Chip>Test chip</Chip>);
  });

  it('renders a basic chip by default', () => {
    const wrapper = root.find('button.rw-Chip');
    expect(wrapper.exists()).toBe(true);

    const icon = root.find('div.rw-Chip-icon');
    expect(icon.exists()).toBe(true);
    expect(icon.prop('role')).toBe('none');
    expect(icon.contains(<XIcon />)).toBe(true);
  });

  describe('when given a size', () => {
    beforeEach(() => {
      root.setProps({ size: 'sm' });
    });

    it('gives the outer element the is-size-sm class', () => {
      const el = root.find('button.rw-Chip');
      expect(el.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when given a className', () => {
    beforeEach(() => {
      root.setProps({ className: 'some-class' });
    });

    it('gives the outer element the className', () => {
      const el = root.find('button.rw-Chip');
      expect(el.hasClass('some-class')).toBe(true);
    });
  });

  describe('when given an onClick', () => {
    const onClick = jest.fn();

    beforeEach(() => {
      root.setProps({ onClick });
    });

    it('gives the outer element the onClick', () => {
      const el = root.find('button.rw-Chip');
      expect(el.prop('onClick')).toBe(onClick);
    });
  });

  describe('when given the hideIcon prop', () => {
    beforeEach(() => {
      root.setProps({ hideIcon: true });
    });

    it('applies the has-no-icon class to the root element', () => {
      const el = root.find('button.rw-Chip');
      expect(el.hasClass('has-no-icon')).toBe(true);
    });

    it('does not render an icon', () => {
      const el = root.find('div.rw-Chip-icon');
      expect(el.exists()).toBe(false);
    });
  });

  describe('when given an icon', () => {
    const icon = <span>my icon</span>;

    beforeEach(() => {
      root.setProps({ icon });
    });

    it('renders the given icon instead', () => {
      const el = root.find('div.rw-Chip-icon');
      expect(el.contains(icon)).toBe(true);
    });
  });

  describe('when given an iconClassName', () => {
    beforeEach(() => {
      root.setProps({ iconClassName: 'some-icon-class' });
    });

    it('gives the class to the icon', () => {
      const el = root.find('div.rw-Chip-icon');
      expect(el.hasClass('some-icon-class')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onBlur = jest.fn();
    const role = 'option';

    beforeEach(() => {
      root.setProps({ onBlur, role });
    });

    it('gives the additional props to the outer element', () => {
      const el = root.find('button.rw-Chip');
      expect(el.prop('onBlur')).toBe(onBlur);
      expect(el.prop('role')).toBe(role);
    });
  });

  describe('when outer element is clicked', () => {
    const onClick = jest.fn();

    beforeEach(() => {
      root.setProps({ onClick });
      root.find('button.rw-Chip').simulate('click');
    });

    it('calls the onClick callback', () => {
      expect(onClick).toBeCalled();
    });
  });

  describe('when icon is clicked', () => {
    const onClick = jest.fn();
    const iconOnClick = jest.fn();

    beforeEach(() => {
      root.setProps({ onClick, iconOnClick });
      root.find('div.rw-Chip-icon').simulate('click');
    });

    it('calls the iconOnClick callback', () => {
      expect(iconOnClick).toBeCalled();
    });

    it('does not call the onClick callback', () => {
      expect(onClick).not.toBeCalled();
    });
  });

  describe('when disabled', () => {
    const onClick = jest.fn();

    beforeEach(() => {
      root.setProps({ disabled: true, onClick });
      root.find('button.rw-Chip').simulate('click');
    });

    it('makes the button disabled', () => {
      const el = root.find('button.rw-Chip');
      expect(el.prop('disabled')).toBe(true);
    });

    it('does not call the onClick when clicked', () => {
      expect(onClick).not.toBeCalled();
    });
  });
});
