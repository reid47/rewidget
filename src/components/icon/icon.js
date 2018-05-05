import React from 'react';
import PropTypes from 'prop-types';
import svgs from './svgs';

export default class Icon extends React.Component {
  static propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOf(Object.keys(svgs)).isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    height: 24,
    width: 24
  };

  render() {
    const { height, name, width } = this.props;
    return svgs[name]({ height, width }) || null;
  }
}
