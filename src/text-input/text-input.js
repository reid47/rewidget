import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix } from '../util';

const TextInput = ({
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

TextInput.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  inputClassName: PropTypes.string,
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
  password: PropTypes.bool,
  rows: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

TextInput.defaultProps = {
  size: 'md',
  rows: 2
};

export { TextInput };
