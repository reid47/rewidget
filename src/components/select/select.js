import React from 'react';
import { classify, prefix } from '../../util';

export const Select = ({
  size,
  className,
  inputClassName,
  children,
  onChange,
  ...props
}) => {
  const selectClasses = classify(
    prefix('Select'),
    className);

  const inputClasses = classify(
    prefix('Select-input'),
    size && `is-size-${size}`,
    inputClassName);

  const arrowClasses = classify(
    prefix('Select-arrow'));

  return (
    <div className={selectClasses}>
      <select {...{
        ...props,
        className: inputClasses,
        onChange: evt => onChange && onChange(evt.target.value)
      }}>
        {children}
      </select>
      <div className={arrowClasses}/>
    </div>
  );
}
