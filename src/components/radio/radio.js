import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix, uniqueId } from '../../util';

const Radio = ({
  size,
  className,
  inputClassName,
  labelClassName,
  widgetClassName,
  children,
  onChange,
  id = uniqueId('radio'),
  ...props
}) => {
  const radioClasses = classify(
    prefix('Radio'),
    size && `is-size-${size}`,
    className
  );

  const inputClasses = classify(prefix('Radio-input'), inputClassName);

  const labelClasses = classify(prefix('Radio-label'), labelClassName);

  const widgetClasses = classify(prefix('Radio-widget'), widgetClassName);

  return (
    <div className={radioClasses}>
      <input
        {...{
          ...props,
          type: 'radio',
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

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  widgetClassName: PropTypes.string
};

export { Radio };
