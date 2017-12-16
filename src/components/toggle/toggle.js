import React from 'react';
import { classify, prefix, uniqueId } from '../../util';

export const Toggle = ({
  size,
  className,
  inputClassName,
  labelClassName,
  widgetClassName,
  children,
  id = uniqueId('toggle'),
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

  const widgetClasses = classify(
    prefix('Toggle-widget'),
    widgetClassName);

  return (
    <div className={toggleClasses}>
      <input type="checkbox" id={id} className={inputClasses} {...props} />
      <label htmlFor={id} className={labelClasses}>
        <span className={widgetClasses}/>
        {children}
      </label>
    </div>
  );
}
