import React from 'react';

export const cls = (...classNames) => classNames.filter(name => name).join(' ');

export const clsNs = (...classNames) => 'rw ' + cls(...classNames);

export const noop = () => {}

export const uniqueId = (prefix = '') =>
  prefix +
  '_' +
  Math.random()
    .toString(36)
    .slice(2, 10);

export const randomIntBetween = (min, max) =>
  Math.random() * (max - min) + min;

export const keyEventMatches = (event, keyName) => {
  const keyNameParts = keyName.split('+');
  if (keyNameParts.length === 1) {
    return event.key === keyNameParts[0];
  }
  return (
    event.key === keyNameParts[1] && event.getModifierState(keyNameParts[0])
  );
};

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

export const getComputedStyleFor = selector => {
  if (document && document.querySelector) {
    const el = document.querySelector(selector);
    if (el) {
      return window.getComputedStyle(el);
    }
  }

  return null;
};

if (window) {
  window.getComputedStyleFor = getComputedStyleFor;
  window.$ = selector => document.querySelector(selector);
  window.$$ = selector => document.querySelectorAll(selector);
}
