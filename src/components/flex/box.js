import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';
import { withLayoutHelper } from '../layout-helper';
import { formatSize, sizeVariants } from '../../sizes';

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