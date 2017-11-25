import React from 'react';

export const cls = (...classNames) => classNames.filter(name => name).join(' ');
export const clsNs = (...classNames) => 'rw ' + cls(...classNames);
export const truthyOrZero = val => val || val === 0;
export const noop = () => {};

export const uniqueId = (prefix = '') => `${prefix}_${Math.random().toString(36).slice(2, 10)}`;

export const allChildrenOfType = expectedType => (
  props,
  propName,
  componentName
) => {
  const prop = props[propName];
  let error;
  React.Children.forEach(prop, child => {
    if (error) return;

    if (child.type !== expectedType) {
      error = new Error(
        `The ${componentName} component only accepts children of type ${
          expectedType.name
        }, but it was given a child of type ${child.type}.`
      );
    }
  });
  return error;
};