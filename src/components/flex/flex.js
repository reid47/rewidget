import React from 'react';
// import PropTypes from 'prop-types';
import { clsNs } from '../../util';
// import { formatSize, sizeVariants } from '../../sizes';
import './flex.css';

const randomColor = () =>
  `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;

const formatColor = (r, g, b) => `rgb(${r},${g},${b})`;
const randomColors = () => {
  const [r, g, b] = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  ];
  const [r2, g2, b2] = [255 - r, 255 - g, 255 - b];
  return {
    background: formatColor(r, g, b),
    color: formatColor(r2, g2, b2)
  };
};

export const Flex = ({
  className = '',
  row = true,
  col = false,
  reverse = false,
  spacing = 'normal',
  ...props
}) => (
  <div {...{
    ...props,
    className: clsNs(
      col ? 'flex-col' : 'flex-row',
      reverse && 'reverse',
      spacing && `spacing-${spacing}`,
      className),
  }}/>
);

export const Box = ({
  style = {},
  className = '',
  fixed = false,
  half = false,
  quarter = false,
  vAlign = 'center',
  hAlign = 'center',
  ...props
}) => {
  return (
    <div {...{
      ...props,
      className: clsNs(
        'flex-box',
        className,
        fixed && 'fixed',
        half ? 'half' : quarter ? 'quarter' : null,
        `ac-${vAlign}-${hAlign}`),
      style: {
        // temp:
        ...style,
        fontSize: '3rem',
        ...randomColors()
      }
    }}/>
  );
}
