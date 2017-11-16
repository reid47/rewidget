import React from 'react';
import { clsNs, allChildrenOfType } from '../../util';
import Button from './button';

const ButtonGroup = ({ children = [] }) => {
  return children.map((child, i) =>
    React.cloneElement(child, {
      key: i,
      className: clsNs(
        child.props.className,
        'is-grouped',
        i === 0 && 'is-grouped-first',
        i > 0 && i < children.length - 1 && 'is-grouped-middle',
        i === children.length - 1 && 'is-grouped-last'
      )
    })
  );
};

ButtonGroup.propTypes = {
  children: allChildrenOfType(Button)
};

export default ButtonGroup;
