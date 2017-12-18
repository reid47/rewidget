import React from 'react';
import { classify, prefix } from '../../util';
import { XIcon } from '../icons';

export const Chip = ({
  selected,
  size,
  className,
  children,
  icon = <XIcon />,
  iconClassName,
  onClick,
  onIconClick,
  ...props
}) => {
  const chipClasses = classify(
    prefix('Chip'),
    selected && 'is-selected',
    size && `is-size-${size}`,
    className
  );

  const iconClasses = classify(prefix('Chip-icon'), iconClassName);

  return (
    <div // eslint-disable-line jsx-a11y/click-events-have-key-events
      tabIndex="-1"
      role="option"
      aria-selected={selected}
      className={chipClasses}
      onClick={onClick}
      {...props}>
      {children}
      <div // eslint-disable-line jsx-a11y/click-events-have-key-events
        role="none"
        onClick={onIconClick}
        className={iconClasses}>
        {icon}
      </div>
    </div>
  );
};
