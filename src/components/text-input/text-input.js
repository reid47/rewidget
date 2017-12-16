import React from 'react';
import { classify, prefix } from '../../util';

export const TextInput = ({
  size,
  onChange,
  multiline,
  rows = 2,
  password,
  className,
  ...props
}) => {
  const inputClasses = classify(
    prefix('TextInput'),
    multiline && 'is-multiline',
    size && `is-size-${size}`,
    className);

  if (multiline) {
    return <textarea {...{
      ...props,
      className: inputClasses,
      onChange: evt => onChange && onChange(evt.target.value),
      rows
    }}/>;
  }

  return (
    <input {...{
      ...props,
      className: inputClasses,
      type: password ? 'password' : 'text',
      onChange: evt => onChange && onChange(evt.target.value)
    }}/>
  );
}
