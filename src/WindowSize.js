import { PureComponent } from 'react';
import types from 'prop-types';

export default class WindowSize extends PureComponent {
  static propTypes = {
    children: types.func
  };

  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  render() {
    return this.props.children ? this.props.children(this.state) : null;
  }
}
