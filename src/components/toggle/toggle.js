import React from 'react';
import { withKeyHandler } from '../key-handler';
import { cls } from '../../util';

const EnhancedLabel = withKeyHandler('label');

export const Toggle = ({
  value = false,
  onChange = null,
  rounded = true,
  animated = true,
  size = 'normal',
  showLabels = false,
  className,
  ...props
}) => {
  return (
    <EnhancedLabel
      className={cls('toggle', `is-size-${size}`)}
      tabIndex="0"
      role="switch"
      aria-checked={String(value)}
      onSpace={evt => {
        evt.preventDefault();
        evt.stopPropagation();
        onChange && onChange(!value);
      }}>
      <input
        {...{
          type: 'checkbox',
          className: cls('toggle-checkbox'),
          checked: value,
          value: value ? 'on' : 'off',
          onChange: evt => onChange && onChange(evt.target.checked)
        }}
      />
      <div
        className={cls(
          'toggle-slider',
          rounded && 'is-rounded',
          animated && 'is-animated',
          value && 'is-checked'
        )}>
        {showLabels &&
          !value && (
            <div className={cls('toggle-label', 'toggle-label-off')}>OFF</div>
          )}
        {showLabels &&
          value && (
            <div className={cls('toggle-label', 'toggle-label-on')}>ON</div>
          )}
      </div>
    </EnhancedLabel>
  );
};
