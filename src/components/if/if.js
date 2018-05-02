import PropTypes from 'prop-types';

const If = ({ not, cond, children }) => {
  cond = typeof cond === 'function' ? cond() : cond;
  if (not) return cond ? null : children;
  return cond ? children : null;
};

If.propTypes = {
  not: PropTypes.bool,
  cond: PropTypes.any,
  children: PropTypes.node
};

export { If };
