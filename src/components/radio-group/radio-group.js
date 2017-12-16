import React from 'react';

export const RadioGroup = ({
  name,
  onChange,
  value,
  children
}) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange: nowChecked => onChange && nowChecked && onChange(child.props.value),
      checked: value === undefined ? undefined : value === child.props.value
    });
  });
}
