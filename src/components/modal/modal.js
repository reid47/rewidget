import React from 'react';
import ReactDOM from 'react-dom';
import { classify, prefix } from '../../util';
import { XIcon } from '../icons';

const getFocusableElements = el =>
  el.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  );
const toClassName = props => classify(
  prefix('Modal'), props.open && 'is-open', props.animated && 'is-animated');

export class Modal extends React.Component {
  static defaultProps = {
    parentNode: document && document.body,
    type: 'dialog'
  };

  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.modalRoot = document.createElement('div');
    this.modalRoot.className = toClassName(props);
  }

  componentDidMount() {
    const { parentNode } = this.props;
    if (!parentNode) return;
    parentNode.appendChild(this.modalRoot);
  }

  componentWillReceiveProps(newProps) {
    this.modalRoot.className = toClassName(newProps);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.open !== this.props.open) {
      if (this.props.open) {
        document.body.classList.add(prefix('Modal-document-body'));

        this.lastFocusedEl = document.activeElement;
        this.firstFocusableEl && this.firstFocusableEl.focus();

        const firstFocusableEl = getFocusableElements(this.modalRoot)[0];
        firstFocusableEl && firstFocusableEl.focus();
      } else {
        document.body.classList.remove(prefix('Modal-document-body'));
        this.lastFocusedEl && this.lastFocusedEl.focus();
      }
    }
  }

  componentWillUnmount() {
    const { parentNode } = this.props;
    if (!parentNode) return;
    parentNode.removeChild(this.modalRoot);
  }

  handleKeyDown(evt) {
    if (evt.key === 'Tab') {
      const focusableEls = getFocusableElements(this.modalRoot);
      if (!focusableEls) return;

      if (!evt.shiftKey) {
        if (
          document.activeElement === focusableEls[focusableEls.length - 1] ||
          document.activeElement === document.body ||
          document.activeElement ===
            this.modalRoot.querySelector('[role="dialog"]')
        ) {
          evt.preventDefault();
          focusableEls[0] && focusableEls[0].focus();
        }
      } else {
        if (
          document.activeElement === focusableEls[0] ||
          document.activeElement === document.body ||
          document.activeElement ===
            this.modalRoot.querySelector('[role="dialog"]')
        ) {
          evt.preventDefault();
          focusableEls[focusableEls.length - 1] &&
            focusableEls[focusableEls.length - 1].focus();
        }
      }
    } else if (evt.key === 'Escape') {
      this.props.onClose && this.props.onClose();
    }
  }

  render() {
    const {
      children,
      type,
      onClose,
      parentNode,
      open,
      animated,
      ...props
    } = this.props;

    return ReactDOM.createPortal(
      <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
        role="dialog"
        tabIndex="-1"
        className={classify(
          prefix('Modal-content'),
          `is-${type}`,
          animated && 'is-animated'
        )}
        onKeyDown={this.handleKeyDown}
        {...props}>
        <button
          type="button"
          onClick={onClose}
          className={classify(
            prefix('Modal-close-button'),
            `is-${type}`,
            animated && 'is-animated'
          )}>
          <XIcon />
        </button>
        {children}
      </div>,
      this.modalRoot
    );
  }
}
