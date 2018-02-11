import React from 'react';
import PropTypes from 'prop-types';

const Each = ({ data, filter, postFilter, children }) => {
  if (filter) {
    data = data.filter(filter);
  }

  children = data.map((datum, i) => {
    const child =
      typeof children === 'function' ? children(datum, i) : children;

    return React.cloneElement(child, { key: i });
  });

  if (postFilter) {
    children = children.filter(postFilter);
  }

  return children;
};

Each.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

Each.defaultProps = {
  data: []
};

export { Each };
