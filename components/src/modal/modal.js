import React from 'react';
import ReactDOM from 'react-dom';
import { classify, prefix } from '../util';
import { XIcon } from '../icons';
import { t } from '../translations';

const getFocusableElements = el =>
  el.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  );

const toClassName = props =>
  classify(
    prefix('Modal'),
    props.open && 'is-open',
    props.animated && 'is-animated'
  );

export class Modal extends React.Component {
  static defaultProps = {
    type: 'dialog'
  };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.modalRoot = document.createElement('div');
    this.modalRoot.className = toClassName(props);

    const bodyRect = document.body.getBoundingClientRect();
    this.isScrollbarVisible =
      bodyRect.left + bodyRect.right < window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }

  componentDidMount() {
    document && document.body.appendChild(this.modalRoot);
  }

  componentWillReceiveProps(newProps) {
    this.modalRoot.className = toClassName(newProps);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.open !== this.props.open) {
      if (this.props.open) {
        this.lastFocusedEl = document.activeElement;
        this.firstFocusableEl && this.firstFocusableEl.focus();

        const focusOnFirstElement = () => {
          const firstFocusableEl = getFocusableElements(this.modalRoot)[0];
          firstFocusableEl && firstFocusableEl.focus();
        };

        if (!this.props.animated) focusOnFirstElement();
        else setTimeout(focusOnFirstElement, 200);
        this.disableBodyScrolling();
      } else {
        this.lastFocusedEl && this.lastFocusedEl.focus();
        this.enableBodyScrolling();
      }
    }
  }

  componentWillUnmount() {
    document && document.body.removeChild(this.modalRoot);
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

  getScrollbarWidth() {
    if (!document) return 0;
    const scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  disableBodyScrolling() {
    document && document.body.classList.add(prefix('Modal-document-body'));
    const inlinePadding = document.body.style.paddingRight;
    inlinePadding &&
      document.body.setAttribute('data-padding-right', inlinePadding);
    const computedPadding = getComputedStyle(
      document.body,
      null
    ).getPropertyValue('padding-right');
    document.body.style.paddingRight = `${this.scrollbarWidth +
      parseFloat(computedPadding)}px`;
  }

  enableBodyScrolling() {
    document && document.body.classList.remove(prefix('Modal-document-body'));
    const savedPadding = document.body.getAttribute('data-padding-right');
    document.body.style.paddingRight = savedPadding;
    document.body.removeAttribute('data-padding-right');
  }

  render() {
    const { children, type, onClose, open, animated, ...props } = this.props;

    return ReactDOM.createPortal(
      <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
        role="dialog"
        tabIndex="-1"
        className={classify(
          prefix('Modal-content'),
          `is-${type}`,
          animated && 'is-animated',
          open && 'is-open'
        )}
        onKeyDown={this.handleKeyDown}
        {...props}>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('closeButtonLabel')}
          className={classify(prefix('Modal-close-button'), `is-${type}`)}>
          <XIcon />
        </button>
        {children}
      </div>,
      this.modalRoot
    );
  }
}
