import React from 'react';
import { classify, prefix, uniqueId } from '../../util';

export const Radio = ({
  size,
  className,
  inputClassName,
  labelClassName,
  widgetClassName,
  children,
  id = uniqueId('radio'),
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

  const widgetClasses = classify(
    prefix('Radio-widget'),
    widgetClassName);

  return (
    <div className={radioClasses}>
      <input type="radio" id={id} className={inputClasses} {...props} />
      <label htmlFor={id} className={labelClasses}>
        <span className={widgetClasses}/>
        {children}
      </label>
    </div>
  );
}
