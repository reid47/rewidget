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
      onChange,
      checked: value !== undefined
        ? value === child.props.value
        : undefined
    });
  });
}
