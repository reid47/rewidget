import React from 'react';
import { clsNs } from '../../util';
import { withLayoutHelper } from '../layout-helper';

export const Item = withLayoutHelper(({
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
