import React from 'react';
import { clsNs } from '../../util';
import { withModifiers } from '../modifiers';

export const List = withModifiers(({
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