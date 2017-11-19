import React from 'react';
import { clsNs } from '../../util';
import { withLayoutHelper } from '../layout-helper';

const Box = ({
  className = '',
  fixed = false,
  half = false,
  quarter = false,
  vAlign = 'center',
  hAlign = 'center',
  ...props
}) => {
  return (
    <div
      {...{
        ...props,
        className: clsNs(
          'flex-box',
          className,
          fixed && 'fixed',
          half ? 'half' : quarter ? 'quarter' : null,
          `ac-${vAlign}-${hAlign}`
        )
      }}
    />
  );
};

const wrappedBox = withLayoutHelper(Box);
export { wrappedBox as Box };