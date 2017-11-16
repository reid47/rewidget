import React from 'react';
import withKeyHandler from '../key-handler/key-handler';
import { clsNs } from '../../util';

const EnhancedLabel = withKeyHandler('label');

const Toggle = ({
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
      className={clsNs('toggle', `is-size-${size}`)}
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
          className: clsNs('toggle-checkbox'),
          checked: value,
          value: value ? 'on' : 'off',
          onChange: evt => onChange && onChange(evt.target.checked)
        }}
      />
      <div
        className={clsNs(
          'toggle-slider',
          rounded && 'is-rounded',
          animated && 'is-animated',
          value && 'is-checked'
        )}>
        {showLabels &&
          !value && (
            <div className={clsNs('toggle-label', 'toggle-label-off')}>OFF</div>
          )}
        {showLabels &&
          value && (
            <div className={clsNs('toggle-label', 'toggle-label-on')}>ON</div>
          )}
      </div>
    </EnhancedLabel>
  );
};

export default Toggle;
