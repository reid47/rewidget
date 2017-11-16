const baseSize = 1;
const unit = 'rem';

const baseSizes = {
  tiny: baseSize / 4,
  small: baseSize / 2,
  default: baseSize,
  large: baseSize * 2,
  huge: baseSize * 4
};

export const sizeVariants = Object.keys(baseSizes);

export const defaultSize = 'default';

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