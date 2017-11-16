import React from 'react';
import { clsNs } from '../../util';
import { withLayoutHelper } from '../layout-helper';

export const List = withLayoutHelper(({
  ordered = false,
  className,
  ...props
}) => {
  const tag = ordered ? 'ol' : 'ul';

  return React.createElement(tag, {
    ...props,
    className: clsNs(
      'list',
      className)
  });
});