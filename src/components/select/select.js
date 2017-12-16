import React from 'react';
import { classify, prefix } from '../../util';

export const Select = ({
  size,
  className,
  children,
  onChange,
  ...props
}) => {
  const selectClasses = classify(
    prefix('Select'),
    size && `is-size-${size}`,
    className);

  return (
    <select {...{
      ...props,
      className: selectClasses,
      onChange: evt => onChange && onChange(evt.target.value)
    }}>
      {children}
    </select>
  );
}
