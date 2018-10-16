import React, { PureComponent } from 'react';
import types from 'prop-types';

const tabbableSelectors = [
  'button',
  'input:not([type="hidden"])',
  'select',
  'textarea',
  'a[href]',
  '[tabindex]',
  '[contenteditable]:not([contenteditable="false"])'
]
  .map(sel => `${sel}:not([disabled]):not([hidden]):not([tabindex="-1"])`)
  .join(', ');

export default class FocusTrap extends PureComponent {
  static propTypes = {
    children: types.node,
    className: types.string,
    style: types.object,
    tag: types.oneOfType([types.string, types.func])
  };

  static defaultProps = {
    tag: 'div'
  };

  componentDidMount() {
    this.findTabbableElements();
  }

  componentDidUpdate() {
    this.findTabbableElements();
  }

  findTabbableElements = () => {
    if (!this.wrapperNode) return;
    const els = this.wrapperNode.querySelectorAll(tabbableSelectors);
    this.firstTabbableElement = els[0];
    this.lastTabbableElement = els[els.length - 1];
  };

  wrapperRef = el => {
    this.wrapperNode = el;
  };

  onKeyDown = evt => {
    const { key, shiftKey } = evt;
    if (!this.props.enabled || key !== 'Tab') return;

    const [first, last] = shiftKey
      ? [this.lastTabbableElement, this.firstTabbableElement]
      : [this.firstTabbableElement, this.lastTabbableElement];

    if (first && document.activeElement === last) {
      evt.preventDefault();
      first.focus();
    }
  };

  render() {
    const { children, tag: Wrapper, className, style } = this.props;

    return (
      <Wrapper ref={this.wrapperRef} onKeyDown={this.onKeyDown} className={className} style={style}>
        {children}
      </Wrapper>
    );
  }
}
