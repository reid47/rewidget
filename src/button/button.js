import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix } from '../util';

const Button = ({
  primary,
  secondary,
  success,
  alert,
  warning,
  alt,
  plain,
  size,
  type,
  className,
  icon,
  iconClassName,
  contentClassName,
  textClassName,
  children,
  ...props
}) => {
  const buttonClasses = classify(
    prefix('Button'),
    (primary || (!secondary && !success && !alert && !warning)) && 'is-primary',
    secondary && 'is-secondary',
    success && 'is-success',
    alert && 'is-alert',
    warning && 'is-warning',
    alt && 'is-alt',
    plain && 'is-plain',
    size && `is-size-${size}`,
    className
  );

  const iconClasses = classify(prefix('Button-icon'), iconClassName);

  const contentClasses = classify(
    prefix('Button-content'),
    icon && 'has-icon',
    !children && 'is-icon-only',
    contentClassName
  );

  const textClasses = classify(
    prefix('Button-text'),
    icon && 'has-icon',
    !children && 'is-icon-only',
    textClassName
  );

  return (
    <button className={buttonClasses} type={type} {...props}>
      <span className={contentClasses}>
        {icon && (
          <span role="presentation" className={iconClasses}>
            {icon}
          </span>
        )}
        <span className={textClasses}>{children}</span>
      </span>
    </button>
  );
};

Button.propTypes = {
  alert: PropTypes.bool,
  alt: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  icon: PropTypes.node,
  iconClassName: PropTypes.string,
  plain: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  success: PropTypes.bool,
  textClassName: PropTypes.string,
  type: PropTypes.string.isRequired,
  warning: PropTypes.bool
};

Button.defaultProps = {
  size: 'md',
  type: 'button'
};

export { Button };
