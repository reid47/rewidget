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

  return (
    <button className={buttonClasses} type={type} {...props}>
      {children}
    </button>
  );
};
