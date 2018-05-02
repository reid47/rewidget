import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix } from '../../util';
import { UpDownChevronIcon } from '../icons';

const Select = ({
  size,
  className,
  inputClassName,
  arrowClassName,
  children,
  onChange,
  ...props
}) => {
  const selectClasses = classify(
    prefix('Select'),
    size && `is-size-${size}`,
    className
  );

  const inputClasses = classify(
    prefix('Select-input'),
    size && `is-size-${size}`,
    inputClassName
  );

  const arrowClasses = classify(prefix('Select-arrow'), arrowClassName);

  return (
    <div className={selectClasses}>
      <select
        {...{
          ...props,
          className: inputClasses,
          onChange: evt => onChange && onChange(evt.target.value)
        }}>
        {children}
      </select>
      <div className={arrowClasses}>
        <UpDownChevronIcon />
      </div>
    </div>
  );
};

Select.propTypes = {
  arrowClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Select.defaultProps = {
  size: 'md'
};

export { Select };
