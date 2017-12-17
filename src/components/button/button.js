import React from 'react';
import { classify, prefix } from '../../util';

export const Button = ({
  primary = false,
  secondary = false,
  success = false,
  alert = false,
  warning = false,
  alt = false,
  plain = false,
  size,
  type = 'button',
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

  const iconClasses = classify(
    prefix('Button-icon'),
    iconClassName);

  const contentClasses = classify(
    prefix('Button-content'),
    icon && 'has-icon',
    !children && 'is-icon-only',
    contentClassName);

  const textClasses = classify(
    prefix('Button-text'),
    icon && 'has-icon',
    !children && 'is-icon-only',
    textClassName);

  return (
    <button className={buttonClasses} type={type} {...props}>
      <span className={contentClasses}>
        {icon && <span role="presentation" className={iconClasses}>{icon}</span>}
        <span className={textClasses}>{children}</span>
      </span>
    </button>
  );
};
