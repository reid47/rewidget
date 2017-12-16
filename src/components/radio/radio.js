import React from 'react';
import { classify, prefix } from '../../util';

export const Radio = ({
  size,
  className,
  inputClassName,
  labelClassName,
  children,
  id,
  ...props
}) => {
  const radioClasses = classify(
    prefix('Radio'),
    size && `is-size-${size}`,
    className);

  const inputClasses = classify(
    prefix('Radio-input'),
    inputClassName);

  const labelClasses = classify(
    prefix('Radio-label'),
    labelClassName);

  return (
    <span className={radioClasses}>
      <input type="radio" id={id} className={inputClasses} {...props} />
      <label htmlFor={id} className={labelClasses}>
        {children}
      </label>
    </span>
  );
}
