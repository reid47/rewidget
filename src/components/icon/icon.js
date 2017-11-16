import React from 'react';
import './open-iconic.min.svg';
import { formatSize } from '../../sizes';

const Icon = ({ size = 'default', name = '' }) => {
  if (!name) return null;

  const sz = formatSize(size);
  return (
    <svg viewBox="0 0 8 8" className="" width={sz} height={sz}>
      <use xlinkHref={`#open-iconic.min_${name}`} />
    </svg>
  );
};

export default Icon;
