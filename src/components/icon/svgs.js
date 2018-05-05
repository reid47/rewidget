/* eslint-disable react/prop-types */
import React from 'react';
import { uniqueId } from '../../util';

const Svg = ({ className, height, width, title, desc, children }) => {
  const titleId = title ? uniqueId('rw-svg-title') : '';
  const descId = desc ? uniqueId('rw-svg-desc') : '';
  const labelledBy = title || desc ? `${titleId} ${descId}` : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={labelledBy}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      {title && <title id={titleId}>{title}</title>}
      {desc && <desc id={desc}>{desc}</desc>}
      {children}
    </svg>
  );
};

export default {
  check: props => (
    <Svg {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Svg>
  ),

  chevron_down: props => (
    <Svg {...props}>
      <polyline points="4 9 12 17 20 9" />
    </Svg>
  ),

  chevron_left: props => (
    <Svg {...props}>
      <polyline points="15 4 7 12 15 20" />
    </Svg>
  ),

  chevron_right: props => (
    <Svg {...props}>
      <polyline points="9 4 17 12 9 20" />
    </Svg>
  ),

  chevron_up: props => (
    <Svg {...props}>
      <polyline points="4 15 12 7 20 15" />
    </Svg>
  ),

  chevron_up_down: props => (
    <Svg {...props}>
      <polyline points="6 9 12 3 18 9" />
      <polyline points="6 15 12 21 18 15" />
    </Svg>
  ),

  menu: props => (
    <Svg {...props}>
      <polyline points="2 6 22 6" />
      <polyline points="2 12 22 12" />
      <polyline points="2 18 22 18" />
    </Svg>
  ),

  search: props => (
    <Svg {...props}>
      <circle cx="11" cy="11" r="9" />
      <line x1="22" y1="22" x2="17.65" y2="17.65" />
    </Svg>
  ),

  to_end: props => (
    <Svg {...props}>
      <polyline points="7 4 15 12 7 20" />
      <polyline points="18 4 18 20" />
    </Svg>
  ),

  to_start: props => (
    <Svg {...props}>
      <polyline points="17 4 9 12 17 20" />
      <polyline points="6 4 6 20" />
    </Svg>
  ),

  x: props => (
    <Svg {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </Svg>
  )
};
