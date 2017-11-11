import React from 'react';
import { clsNs } from '../../util';
import './Button.css';

const Button = ({
  primary = true,
  secondary = false,
  success = false,
  alert = false,
  warning = false,
  alt = false,
  plain = false,
  className,
  children,
  ...props
}) => {
  const cn = clsNs(
    primary && 'primary',
    secondary && 'secondary',
    success && 'success',
    alert && 'alert',
    warning && 'warning',
    alt && 'alt',
    plain && 'plain',
    className);

  return <button className={cn} {...props}>{children}</button>
};

export default Button;
