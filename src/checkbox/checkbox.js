import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix, uniqueId } from '../util';

const Checkbox = ({
  size,
  className,
  inputClassName,
  labelClassName,
  widgetClassName,
  children,
  onChange,
  id = uniqueId('checkbox'),
  ...props
}) => {
  const checkboxClasses = classify(
    prefix('Checkbox'),
    size && `is-size-${size}`,
    className
  );

  const inputClasses = classify(prefix('Checkbox-input'), inputClassName);

  const labelClasses = classify(prefix('Checkbox-label'), labelClassName);

  const widgetClasses = classify(prefix('Checkbox-widget'), widgetClassName);

  return (
    <div className={checkboxClasses}>
      <input
        {...{
          ...props,
          type: 'checkbox',
          id,
          className: inputClasses,
          onChange: evt => onChange && onChange(evt.target.checked)
        }}
      />
      <label htmlFor={id} className={labelClasses}>
        <span className={widgetClasses} />
        {children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  widgetClassName: PropTypes.string
};

export { Checkbox };
