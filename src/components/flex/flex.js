import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';
import { withLayoutHelper } from '../layout-helper';
import { sizeVariants } from '../../sizes';

const Flex = ({
  className = '',
  row = true,
  col = false,
  reverse = false,
  spacing = 'default',
  spaceBetween = false,
  ...props
}) => (
  <div
    {...{
      ...props,
      className: clsNs(
        col ? 'flex-col' : 'flex-row',
        reverse && 'reverse',
        spacing && `spacing-${spacing}`,
        spaceBetween && 'space-between',
        className
      )
    }}
  />
);

Flex.propTypes = {
  row: PropTypes.bool,
  col: PropTypes.bool,
  reverse: PropTypes.bool,
  spacing: PropTypes.oneOf(['zero', ...sizeVariants])
}

const wrappedFlex = withLayoutHelper(Flex);
export { wrappedFlex as Flex };
