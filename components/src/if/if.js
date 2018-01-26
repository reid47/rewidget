import React from 'react';
import PropTypes from 'prop-types';

const If = ({
  condition,
  children
}) => {
  return typeof condition === 'function'
    ? condition() ? children : null
    : condition ? children : null;
};

If.propTypes = {
  condition: PropTypes.oneOf(PropTypes.bool, PropTypes.func),
  children: PropTypes.node
};

export { If };
