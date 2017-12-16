import React from 'react';
import { classify, prefix, uniqueId } from '../../util';

export const Checkbox = ({
  size,
  className,
  inputClassName,
  labelClassName,
  widgetClassName,
  children,
  id = uniqueId('checkbox'),
  ...props
}) => {
  const checkboxClasses = classify(
    prefix('Checkbox'),
    size && `is-size-${size}`,
    className);

  const inputClasses = classify(
    prefix('Checkbox-input'),
    inputClassName);

  const labelClasses = classify(
    prefix('Checkbox-label'),
    labelClassName);

  const widgetClasses = classify(
    prefix('Checkbox-widget'),
    widgetClassName);

  return (
    <div className={checkboxClasses}>
      <input type="checkbox" id={id} className={inputClasses} {...props} />
      <label htmlFor={id} className={labelClasses}>
        <span className={widgetClasses}/>
        {children}
      </label>
    </div>
  );
}
