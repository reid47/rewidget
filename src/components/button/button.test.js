import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Button } from './button';

describe('Button', () => {
  let root;

  beforeEach(() => {
    root = mount(<Button>Click me</Button>);
  });

  it('renders a simple button by default', () => {
    const btn = root.find('button.rw-Button');
    expect(btn.exists()).toBe(true);
    expect(btn.is('[type="button"]')).toBe(true);
    expect(btn.hasClass('is-primary')).toBe(true);
    expect(btn.text()).toBe('Click me');

    const btnContent = root.find('span.rw-Button-content');
    expect(btnContent.exists()).toBe(true);

    const btnText = root.find('span.rw-Button-text');
    expect(btnText.exists()).toBe(true);
  });

  describe('when given the secondary prop', () => {
    beforeEach(() => {
      root.setProps({ secondary: true });
    });

    it('gives the button the is-secondary class', () => {
      const btn = root.find('button');
      expect(btn.hasClass('is-secondary')).toBe(true);
      expect(btn.hasClass('is-primary')).toBe(false);
    });
  });

  describe('when given the success prop', () => {
    beforeEach(() => {
      root.setProps({ success: true });
    });

    it('gives the button the is-success class', () => {
      const btn = root.find('button');
      expect(btn.hasClass('is-success')).toBe(true);
      expect(btn.hasClass('is-primary')).toBe(false);
    });
  });

  describe('when given the alert prop', () => {
    beforeEach(() => {
      root.setProps({ alert: true });
    });

    it('gives the button the is-alert class', () => {
      const btn = root.find('button');
      expect(btn.hasClass('is-alert')).toBe(true);
      expect(btn.hasClass('is-primary')).toBe(false);
    });
  });

  describe('when given the warning prop', () => {
    beforeEach(() => {
      root.setProps({ warning: true });
    });

    it('gives the button the is-warning class', () => {
      const btn = root.find('button');
      expect(btn.hasClass('is-warning')).toBe(true);
      expect(btn.hasClass('is-primary')).toBe(false);
    });
  });

  describe('when given the size prop', () => {
    beforeEach(() => {
      root.setProps({ size: 'sm' });
    });

    it('gives the button the is-size-sm class', () => {
      const btn = root.find('button');
      expect(btn.hasClass('is-size-sm')).toBe(true);
    });
  });

  describe('when given a className', () => {
    beforeEach(() => {
      root.setProps({ className: 'some-class' });
    });

    it('gives the button the className', () => {
      const btn = root.find('button');
      expect(btn.hasClass('some-class')).toBe(true);
    });
  });

  describe('when given an icon', () => {
    beforeEach(() => {
      root.setProps({ icon: <span className="an-icon" /> });
    });

    it('renders the icon', () => {
      const el = root.find('span.rw-Button-icon span.an-icon');
      expect(el.exists()).toBe(true);
    });

    it('gives the icon role="presentation"', () => {
      const el = root.find('span.rw-Button-icon');
      expect(el.prop('role')).toBe('presentation');
    });
  });

  describe('when given an iconClassName', () => {
    beforeEach(() => {
      root.setProps({
        icon: <span className="an-icon" />,
        iconClassName: 'some-icon-class'
      });
    });

    it('puts the className on the icon', () => {
      const el = root.find('span.rw-Button-icon');
      expect(el.hasClass('some-icon-class')).toBe(true);
    });
  });

  describe('when given a contentClassName', () => {
    beforeEach(() => {
      root.setProps({ contentClassName: 'some-content-class' });
    });

    it('puts the className on the content', () => {
      const el = root.find('span.rw-Button-content');
      expect(el.hasClass('some-content-class')).toBe(true);
    });
  });

  describe('when given a textClassName', () => {
    beforeEach(() => {
      root.setProps({ textClassName: 'some-text-class' });
    });

    it('puts the className on the text', () => {
      const el = root.find('span.rw-Button-text');
      expect(el.hasClass('some-text-class')).toBe(true);
    });
  });

  describe('when type="submit"', () => {
    beforeEach(() => {
      root.setProps({ type: 'submit' });
    });

    it('gives the button type="submit"', () => {
      const btn = root.find('button');
      expect(btn.is('[type="submit"]')).toBe(true);
    });
  });

  describe('when given additional props', () => {
    const onClick = () => 47;
    const id = 'button-id';

    beforeEach(() => {
      root.setProps({ onClick, id });
    });

    it('puts the additional props on the button', () => {
      const btn = root.find('button');
      expect(btn.props().onClick).toBe(onClick);
      expect(btn.props().id).toBe(id);
    });
  });
});
