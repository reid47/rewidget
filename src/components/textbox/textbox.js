import React from 'react';
import { classify, prefix } from '../../util';

export const Textbox = ({
  size,
  onChange,
  multiline,
  rows = 2,
  password,
  className,
  ...props
}) => {
  const textboxClasses = classify(
    prefix('Textbox'),
    multiline && 'is-multiline',
    size && `is-size-${size}`,
    className);

  if (multiline) {
    return <textarea {...{
      ...props,
      className: textboxClasses,
      onChange: evt => onChange && onChange(evt.target.value),
      rows
    }}/>;
  }

  return (
    <input {...{
      ...props,
      className: textboxClasses,
      type: password ? 'password' : 'text',
      onChange: evt => onChange && onChange(evt.target.value)
    }}/>
  );
}
