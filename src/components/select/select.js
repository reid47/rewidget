import React from 'react';
import { classify, prefix } from '../../util';

export const Select = ({
  size,
  className,
  children,
  ...props
}) => {
  const selectClasses = classify(
    prefix('Select'),
    size && `is-size-${size}`,
    className);

  return (
    <select className={selectClasses} {...props}>
      {children}
    </select>
  );
}
