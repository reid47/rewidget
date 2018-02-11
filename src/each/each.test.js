import React from 'react';
import { mount } from 'enzyme';
import { Each } from './each';

describe('Each', () => {
  let root;

  beforeEach(() => {
    root = mount(
      <Each>
        <div className="item" />
      </Each>
    );
  });

  it('renders nothing with no data', () => {
    expect(root.find('.item').exists()).toBe(false);
  });

  describe('when given data items', () => {
    beforeEach(() => {
      root.setProps({ data: ['one', 'two', 'three'] });
    });

    it('renders its children once for each data item', () => {
      expect(root.find('.item').length).toBe(3);
    });

    describe('when given a filter', () => {
      beforeEach(() => {
        root.setProps({ filter: datum => datum.indexOf('e') > -1 });
      });

      it('filters the children before rendering', () => {
        expect(root.find('.item').length).toBe(2);
      });
    });

    describe('when given a children function', () => {
      beforeEach(() => {
        root.setProps({
          children: (datum, i) => <div className={`item item-${datum}-${i}`} />
        });
      });

      it('calls the children function to render each data item', () => {
        expect(root.find('.item').length).toBe(3);
        expect(
          root
            .find('.item')
            .at(0)
            .hasClass('item-one-0')
        ).toBe(true);
        expect(
          root
            .find('.item')
            .at(1)
            .hasClass('item-two-1')
        ).toBe(true);
        expect(
          root
            .find('.item')
            .at(2)
            .hasClass('item-three-2')
        ).toBe(true);
      });

      describe('when given a filter', () => {
        beforeEach(() => {
          root.setProps({ filter: datum => datum.indexOf('e') > -1 });
        });

        it('filters the children before rendering', () => {
          expect(root.find('.item').length).toBe(2);
          expect(
            root
              .find('.item')
              .at(0)
              .hasClass('item-one-0')
          ).toBe(true);
          expect(
            root
              .find('.item')
              .at(1)
              .hasClass('item-three-1')
          ).toBe(true);
        });
      });

      describe('when given a postFilter', () => {
        beforeEach(() => {
          root.setProps({
            postFilter: child =>
              child.props.className.indexOf('item-three-2') !== -1
          });
        });

        it('filters the children after rendering', () => {
          expect(root.find('.item').length).toBe(1);
          expect(
            root
              .find('.item')
              .at(0)
              .hasClass('item-three-2')
          ).toBe(true);
        });
      });
    });
  });
});
