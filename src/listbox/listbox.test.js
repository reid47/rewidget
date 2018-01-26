import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Listbox } from './listbox';

describe('Listbox', () => {
  let root;

  beforeEach(() => {
    root = mount(<Listbox items={['One', 'Two', 'Three']} />);
  });

  it('renders a wrapper element', () => {
    const outerEl = root.find('ul.rw-Listbox');
    expect(outerEl.exists()).toBe(true);
    expect(outerEl.prop('role')).toBe('listbox');
    expect(outerEl.prop('tabIndex')).toBe('0');
  });

  it('renders each item', () => {
    const itemEls = root.find('li.rw-Listbox-item');
    expect(itemEls.length).toBe(3);
    expect(itemEls.at(0)).toHaveText('One');
    expect(itemEls.at(1)).toHaveText('Two');
    expect(itemEls.at(2)).toHaveText('Three');
    expect(itemEls.everyWhere(el => el.prop('role') === 'option')).toBe(true);
    expect(itemEls.everyWhere(el => el.prop('aria-selected') === 'false')).toBe(true);
  });

  describe('when given an itemClassName', () => {
    beforeEach(() => {
      root.setProps({ itemClassName: 'some-item-class' });
    });

    it('gives the itemClassName to each item element', () => {
      const itemEls = root.find('li.rw-Listbox-item');
      expect(itemEls.at(0).hasClass('some-item-class')).toBe(true);
      expect(itemEls.at(1).hasClass('some-item-class')).toBe(true);
      expect(itemEls.at(2).hasClass('some-item-class')).toBe(true);
    });
  });

  describe('when given a className', () => {
    beforeEach(() => {
      root.setProps({ className: 'some-list-class' });
    });

    it('gives the className to the outer element', () => {
      const outerEl = root.find('ul.rw-Listbox');
      expect(outerEl.hasClass('some-list-class')).toBe(true);
    });
  });

  describe('when given a value', () => {
    beforeEach(() => {
      root.setProps({ value: 'Two' });
    });

    it('renders the matching item as aria-selected', () => {
      const itemEls = root.find('li.rw-Listbox-item');
      expect(itemEls.at(0).prop('aria-selected')).toBe('false');
      expect(itemEls.at(1).prop('aria-selected')).toBe('true');
      expect(itemEls.at(2).prop('aria-selected')).toBe('false');
    });

    it('gives the matching item the is-selected class', () => {
      const itemEls = root.find('li.rw-Listbox-item');
      expect(itemEls.at(0).hasClass('is-selected')).toBe(false);
      expect(itemEls.at(1).hasClass('is-selected')).toBe(true);
      expect(itemEls.at(2).hasClass('is-selected')).toBe(false);
    });
  });

  describe('when given a renderItem callback', () => {
    const renderItem = jest.fn(item => <span className="test-render-item">{item}</span>);

    beforeEach(() => {
      root.setProps({ renderItem });
    });

    it('calls the renderItem callback', () => {
      expect(renderItem).toHaveBeenCalledWith('One');
      expect(renderItem).toHaveBeenCalledWith('Two');
      expect(renderItem).toHaveBeenCalledWith('Three');
    });

    it('renders the return value of the callback', () => {
      const itemEls = root.find('li.rw-Listbox-item');
      expect(itemEls.at(0).contains(<span className="test-render-item">One</span>)).toBe(true);
      expect(itemEls.at(1).contains(<span className="test-render-item">Two</span>)).toBe(true);
      expect(itemEls.at(2).contains(<span className="test-render-item">Three</span>)).toBe(true);
    });
  });

  describe('when given a getItemValue callback', () => {
    const getItemValue = jest.fn(item => item + '_value');

    beforeEach(() => {
      root.setProps({ getItemValue, value: 'Three_value' });
    });

    it('calls the getItemValue callback', () => {
      expect(getItemValue).toHaveBeenCalledWith('One');
      expect(getItemValue).toHaveBeenCalledWith('Two');
      expect(getItemValue).toHaveBeenCalledWith('Three');
    });

    it('uses the callback to determine item values', () => {
      const itemEls = root.find('li.rw-Listbox-item');
      expect(itemEls.at(2).prop('aria-selected')).toBe('true');
      expect(itemEls.at(2).hasClass('is-selected')).toBe(true);
    });
  });

  describe('when there are no items', () => {
    beforeEach(() => {
      root.setProps({ items: [] });
    });

    it('renders an empty list', () => {
      const itemEls = root.find('li.rw-Listbox-item');
      expect(itemEls.length).toBe(0);
      const outerEl = root.find('ul.rw-Listbox');
      expect(outerEl.children()).toBeEmpty();
    });

    describe('when there is an emptyState given', () => {
      beforeEach(() => {
        root.setProps({ emptyState: <p>No items!</p> });
      });

      it('renders the empty state instead', () => {
        const outerEl = root.find('ul.rw-Listbox');
        expect(outerEl.children()).not.toBeEmpty();
        expect(outerEl.contains(<p>No items!</p>)).toBe(true);
      });
    });
  });
});
