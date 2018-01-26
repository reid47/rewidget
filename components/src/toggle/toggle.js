import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix, uniqueId } from '../util';

const Toggle = ({
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
    className
  );

  const inputClasses = classify(prefix('Toggle-input'), inputClassName);

  const labelClasses = classify(prefix('Toggle-label'), labelClassName);

  const widgetClasses = classify(prefix('Toggle-widget'), widgetClassName);

  return (
    <div className={toggleClasses}>
      <input
        {...{
          ...props,
          type: 'checkbox',
          role: 'switch',
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

Toggle.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  widgetClassName: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  id: PropTypes.string
};

export { Toggle };
