import React from 'react';
import { clsNs } from '../../util';
import { withModifiers } from '../modifiers';

export const Item = withModifiers(({
  decorated = false,
  className,
  ...props
}) => {
  return React.createElement('li', {
    ...props,
    className: clsNs(
      'list-item',
      className,
      decorated && 'is-decorated')
  });
});
