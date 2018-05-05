import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import svgs from './svgs';

export default class Icon extends PureComponent {
  static propTypes = {
    // Class name to pass to the `svg` element. Can be used for custom styling with CSS.
    className: PropTypes.string,

    // Accessible description of icon. Use this when you need to provide more details than `title` can give.
    desc: PropTypes.string,

    // Height of icon. Can be any valid SVG height value (e.g. `12`, `"12"`, `"50%"`).
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    // Name of icon
    name: PropTypes.oneOf(Object.keys(svgs)).isRequired,

    // Accessible name of icon. It's recommended to provide this to make the purpose of an
    // icon clear to screen readers.
    title: PropTypes.string,

    // Width of icon. Can be any valid SVG width value (e.g. `12`, `"12"`, `"50%"`).
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    height: 24,
    width: 24
  };

  render() {
    const { name, ...svgProps } = this.props;
    return svgs[name](svgProps) || null;
  }
}
