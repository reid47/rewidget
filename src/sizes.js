const baseSize = 1;
const unit = 'rem';

const baseSizes = {
  z: 0,
  xs: baseSize / 4,
  s: baseSize / 2,
  m: baseSize,
  l: baseSize * 2,
  xl: baseSize * 3,
  xxl: baseSize * 4
};

const numericSizes = {
  0: baseSizes.z,
  [1/4]: baseSizes.xs,
  [1/2]: baseSizes.s,
  1: baseSizes.m,
  2: baseSizes.l,
  3: baseSizes.xl,
  4: baseSizes.xxl
};

const numericSizesToSizeNames = {
  0: 'z',
  [1/4]: 'xs',
  [1/2]: 's',
  1: 'm',
  2: 'l',
  3: 'xl',
  4: 'xxl'
};

export const sizeVariants = Object.keys(numericSizes).map(n => +n)
  .concat(Object.keys(numericSizes))
  .concat(Object.keys(baseSizes));

export const defaultSize = 'm';

export const toSizeName = n => numericSizesToSizeNames[n] || n;

export function formatSize(sizeName, transformFunc = null) {
  if (transformFunc) {
    return transformFunc(baseSizes[sizeName]) + unit;
  }

  return baseSizes[sizeName] + unit;
}

export function rawSize(sizeName, transformFunc = null) {
  if (transformFunc) {
    return transformFunc(baseSizes[sizeName]);
  }

  return baseSizes[sizeName];
}

export function times(multiplier) {
  return function(n) {
    return n * multiplier;
  };
}

export function sizeBelow(sizeName) {
  switch (sizeName) {
    case 'small': return 'tiny';
    case 'default': return 'small';
    case 'large': return 'default';
    case 'huge': return 'large';
    default: return 'tiny';
  }
}