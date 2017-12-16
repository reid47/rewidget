import React from 'react';
import { classify, prefix, uniqueId } from '../../util';

export const Toggle = ({
  size,
  className,
  inputClassName,
  labelClassName,
  widgetClassName,
  children,
  onChange,
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
      <input {...{
        ...props,
        type: 'checkbox',
        id,
        className: inputClasses,
        onChange: evt => onChange && onChange(evt.target.checked)
      }}/>
      <label htmlFor={id} className={labelClasses}>
        <span className={widgetClasses}/>
        {children}
      </label>
    </div>
  );
}
