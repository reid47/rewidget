import React from 'react';
import { classify, prefix } from '../../util';

export const Checkbox = ({
  size,
  className,
  inputClassName,
  labelClassName,
  children,
  id,
  ...props
}) => {
  const checkboxClasses = classify(
    prefix('Checkbox'),
    size && `is-size-${size}`);

  const inputClasses = classify(
    prefix('Checkbox-input'),
    inputClassName);

  const labelClasses = classify(
    prefix('Checkbox-label'),
    labelClassName);

  return (
    <span className={checkboxClasses}>
      <input type="checkbox" id={id} className={inputClasses} {...props} />
      <label htmlFor={id} className={labelClasses}>
        {children}
      </label>
    </span>
  );
}
