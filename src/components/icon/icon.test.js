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

    test('custom className', () => {
      expect(
        render(<Icon name="check" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="check"
            title="Test icon title"
            desc="Test icon description"
          />
        )
      ).toMatchSnapshot();
    });
  });

  describe('name = chevron_down', () => {
    test('default size', () => {
      expect(render(<Icon name="chevron_down" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="chevron_down" width="36" height="36" />)
      ).toMatchSnapshot();
    });

    test('custom className', () => {
      expect(
        render(<Icon name="chevron_down" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="chevron_down"
            title="Test icon title"
            desc="Test icon description"
          />
        )
      ).toMatchSnapshot();
    });
  });

  describe('name = chevron_left', () => {
    test('default size', () => {
      expect(render(<Icon name="chevron_left" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="chevron_left" width="36" height="36" />)
      ).toMatchSnapshot();
    });

    test('custom className', () => {
      expect(
        render(<Icon name="chevron_left" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="chevron_left"
            title="Test icon title"
            desc="Test icon description"
          />
        )
      ).toMatchSnapshot();
    });
  });

  describe('name = chevron_right', () => {
    test('default size', () => {
      expect(render(<Icon name="chevron_right" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="chevron_right" width="36" height="36" />)
      ).toMatchSnapshot();
    });

    test('custom className', () => {
      expect(
        render(<Icon name="chevron_right" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="chevron_right"
            title="Test icon title"
            desc="Test icon description"
          />
        )
      ).toMatchSnapshot();
    });
  });

  describe('name = chevron_up', () => {
    test('default size', () => {
      expect(render(<Icon name="chevron_up" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="chevron_up" width="36" height="36" />)
      ).toMatchSnapshot();
    });

    test('custom className', () => {
      expect(
        render(<Icon name="chevron_up" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="chevron_up"
            title="Test icon title"
            desc="Test icon description"
          />
        )
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

    test('custom className', () => {
      expect(
        render(<Icon name="chevron_up_down" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="chevron_up_down"
            title="Test icon title"
            desc="Test icon description"
          />
        )
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

    test('custom className', () => {
      expect(
        render(<Icon name="menu" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="menu"
            title="Test icon title"
            desc="Test icon description"
          />
        )
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

    test('custom className', () => {
      expect(
        render(<Icon name="search" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="search"
            title="Test icon title"
            desc="Test icon description"
          />
        )
      ).toMatchSnapshot();
    });
  });

  describe('name = to_end', () => {
    test('default size', () => {
      expect(render(<Icon name="to_end" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="to_end" width="36" height="36" />)
      ).toMatchSnapshot();
    });

    test('custom className', () => {
      expect(
        render(<Icon name="to_end" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="to_end"
            title="Test icon title"
            desc="Test icon description"
          />
        )
      ).toMatchSnapshot();
    });
  });

  describe('name = to_start', () => {
    test('default size', () => {
      expect(render(<Icon name="to_start" />)).toMatchSnapshot();
    });

    test('custom size', () => {
      expect(
        render(<Icon name="to_start" width="36" height="36" />)
      ).toMatchSnapshot();
    });

    test('custom className', () => {
      expect(
        render(<Icon name="to_start" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon
            name="to_start"
            title="Test icon title"
            desc="Test icon description"
          />
        )
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

    test('custom className', () => {
      expect(
        render(<Icon name="x" className="test-class" />)
      ).toMatchSnapshot();
    });

    test('custom title and desc', () => {
      expect(
        render(
          <Icon name="x" title="Test icon title" desc="Test icon description" />
        )
      ).toMatchSnapshot();
    });
  });
});
