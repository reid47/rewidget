export const prefix = className => 'rw-' + className;

export const classify = (...classNames) => classNames.filter(Boolean).join(' ');

export const uniqueId = (prefix = '') =>
  `${prefix}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
