import React from 'react';
import { classify, prefix } from '../../util';

export const Toggle = ({
  size,
  className,
  inputClassName,
  labelClassName,
  children,
  id,
  ...props
}) => {
  const toggleClasses = classify(
    prefix('Toggle'),
    size && `is-size-${size}`,
    className);

  const inputClasses = classify(
    prefix('Toggle-input'),
    inputClassName);

  const labelClasses = classify(
    prefix('Toggle-label'),
    labelClassName);

  return (
    <span className={toggleClasses}>
      <input type="checkbox" id={id} className={inputClasses} {...props} />
      <label htmlFor={id} className={labelClasses}>
        {children}
      </label>
    </span>
  );
}
