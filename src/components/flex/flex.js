import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';
import { withModifiers } from '../modifiers';
import { sizeVariants } from '../../sizes';

const Flex = ({
  className = '',
  row = true,
  col = false,
  reverse = false,
  spacing,
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

const wrappedFlex = withModifiers(Flex);
export { wrappedFlex as Flex };
