import React from 'react';
import { classify, prefix } from '../util';

export const TextInput = ({
  size,
  onChange,
  multiline,
  rows = 2,
  password,
  className,
  inputClassName,
  icon,
  ...props
}) => {
  const wrapperClasses = classify(
    prefix('TextInput'),
    size && `is-size-${size}`,
    className
  );

  const inputClasses = classify(
    prefix('TextInput-input'),
    multiline && 'is-multiline',
    size && `is-size-${size}`,
    icon && 'has-icon',
    inputClassName
  );

  const iconClasses = classify(prefix('TextInput-icon'));

  const convertedOnChange = evt => onChange && onChange(evt.target.value);

  const input = multiline ? (
    <textarea
      {...{
        ...props,
        className: inputClasses,
        onChange: convertedOnChange,
        rows
      }}
    />
  ) : (
    <input
      {...{
        ...props,
        className: inputClasses,
        type: password ? 'password' : 'text',
        onChange: convertedOnChange
      }}
    />
  );

  const iconEl = icon && (
    <div role="presentation" className={iconClasses}>
      {icon}
    </div>
  );

  return (
    <div className={wrapperClasses}>
      {iconEl}
      {input}
    </div>
  );
};
