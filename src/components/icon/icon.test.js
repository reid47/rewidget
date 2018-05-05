import React from 'react';
import { render } from 'enzyme';
import Icon from './icon';

describe('Icon', () => {
  describe('name = check', () => {
    test('default size', () => {
      expect(render(<Icon name="check" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="check" width="36" height="36" />)
      ).toMatchSnapshot();
    });
  });

  describe('name = chevron_up_down', () => {
    test('default size', () => {
      expect(render(<Icon name="chevron_up_down" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="chevron_up_down" width="36" height="36" />)
      ).toMatchSnapshot();
    });
  });

  describe('name = menu', () => {
    test('default size', () => {
      expect(render(<Icon name="menu" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="menu" width="36" height="36" />)
      ).toMatchSnapshot();
    });
  });

  describe('name = search', () => {
    test('default size', () => {
      expect(render(<Icon name="search" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="search" width="36" height="36" />)
      ).toMatchSnapshot();
    });
  });

  describe('name = x', () => {
    test('default size', () => {
      expect(render(<Icon name="x" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="x" width="36" height="36" />)
      ).toMatchSnapshot();
    });
  });
});
