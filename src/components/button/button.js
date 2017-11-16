import React from 'react';
import { clsNs } from '../../util';

const Button = ({
  primary = true,
  secondary = false,
  success = false,
  alert = false,
  warning = false,
  alt = false,
  plain = false,
  size = 'default',
  className,
  children,
  ...props
}) => {
  const cn = clsNs(
    'button',
    primary && 'is-primary',
    secondary && 'is-secondary',
    success && 'is-success',
    alert && 'is-alert',
    warning && 'is-warning',
    alt && 'is-alt',
    plain && 'is-plain',
    `is-size-${size}`,
    className
  );

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
};

export default Button;
