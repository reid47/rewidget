import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix } from '../util';
import { XIcon } from '../icons';

const Chip = ({
  size,
  disabled,
  className,
  children,
  hideIcon,
  icon,
  iconClassName,
  onClick,
  iconOnClick,
  ...props
}) => {
  const chipClasses = classify(
    prefix('Chip'),
    size && `is-size-${size}`,
    hideIcon && 'has-no-icon',
    className
  );

  const iconClasses = !hideIcon && classify(prefix('Chip-icon'), iconClassName);

  return (
    <button // eslint-disable-line jsx-a11y/click-events-have-key-events
      tabIndex="-1"
      className={chipClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}>
      {children}
      {!hideIcon && (
        <div // eslint-disable-line jsx-a11y/click-events-have-key-events
          role="none"
          onClick={
            iconOnClick
              ? evt => {
                  evt.stopPropagation();
                  evt.preventDefault();
                  iconOnClick(evt);
                }
              : undefined
          }
          className={iconClasses}>
          {icon}
        </div>
      )}
    </button>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hideIcon: PropTypes.bool,
  icon: PropTypes.node,
  iconClassName: PropTypes.string,
  iconOnClick: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Chip.defaultProps = {
  icon: <XIcon />,
  size: 'md'
};

export { Chip };
