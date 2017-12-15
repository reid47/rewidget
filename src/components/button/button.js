import React from 'react';
import { cls } from '../../util';

export const Button = ({
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
  const cn = cls(
    'rw-Button',
    primary && 'rw-Button-primary',
    secondary && 'rw-Button-secondary',
    success && 'rw-Button-success',
    alert && 'rw-Button-alert',
    warning && 'rw-Button-warning',
    alt && 'rw-Button-alt',
    plain && 'rw-Button-plain',
    `rw-Button-size-${size}`,
    className
  );

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
};
