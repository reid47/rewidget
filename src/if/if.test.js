import React from 'react';
import { mount } from 'enzyme';
import { If } from './if';

describe('If', () => {
  let root;

  beforeEach(() => {
    root = mount(<If>
      <div className="maybe-rendered">some children</div>
    </If>);
  });

  it('does not render children when no cond prop given', () => {
    expect(root.find('.maybe-rendered').exists()).toBe(false);
  });

  it('does not render children when cond is false', () => {
    root.setProps({cond: false});
    expect(root.find('.maybe-rendered').exists()).toBe(false);
  });

  it('does not render children when cond is falsy', () => {
    root.setProps({cond: 0});
    expect(root.find('.maybe-rendered').exists()).toBe(false);
  });

  it('does not render children when cond is a function returning false', () => {
    root.setProps({cond: () => false});
    expect(root.find('.maybe-rendered').exists()).toBe(false);
  });

  it('does not render children when cond is a function returning falsy', () => {
    root.setProps({cond: () => 0});
    expect(root.find('.maybe-rendered').exists()).toBe(false);
  });

  it('renders children when cond is true', () => {
    root.setProps({cond: true});
    expect(root.find('.maybe-rendered').exists()).toBe(true);
  });

  it('renders children when cond is truthy', () => {
    root.setProps({cond: 47});
    expect(root.find('.maybe-rendered').exists()).toBe(true);
  });

  it('renders children when cond is a function returning true', () => {
    root.setProps({cond: true});
    expect(root.find('.maybe-rendered').exists()).toBe(true);
  });

  it('renders children when cond is a function returning truthy', () => {
    root.setProps({cond: 47});
    expect(root.find('.maybe-rendered').exists()).toBe(true);
  });

  describe('when the not prop is true', () => {
    beforeEach(() => {
      root.setProps({not: true});
    });

    it('renders children when no cond prop given', () => {
      expect(root.find('.maybe-rendered').exists()).toBe(true);
    });

    it('renders children when cond is false', () => {
      root.setProps({cond: false});
      expect(root.find('.maybe-rendered').exists()).toBe(true);
    });

    it('renders children when cond is falsy', () => {
      root.setProps({cond: 0});
      expect(root.find('.maybe-rendered').exists()).toBe(true);
    });

    it('renders children when cond is a function returning false', () => {
      root.setProps({cond: () => false});
      expect(root.find('.maybe-rendered').exists()).toBe(true);
    });

    it('renders children when cond is a function returning falsy', () => {
      root.setProps({cond: () => 0});
      expect(root.find('.maybe-rendered').exists()).toBe(true);
    });

    it('does not render children when cond is true', () => {
      root.setProps({cond: true});
      expect(root.find('.maybe-rendered').exists()).toBe(false);
    });

    it('does not render children when cond is truthy', () => {
      root.setProps({cond: 47});
      expect(root.find('.maybe-rendered').exists()).toBe(false);
    });

    it('does not render children when cond is a function returning true', () => {
      root.setProps({cond: true});
      expect(root.find('.maybe-rendered').exists()).toBe(false);
    });

    it('does not render children when cond is a function returning truthy', () => {
      root.setProps({cond: 47});
      expect(root.find('.maybe-rendered').exists()).toBe(false);
    });
  });
});
