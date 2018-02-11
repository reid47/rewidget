import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classify, prefix } from '../util';
import { XIcon } from '../icons';
import { t } from '../translations';
import { getTabbableElements } from '../helpers/find-tabbables';
import {
  enableBodyScrolling,
  disableBodyScrolling
} from '../helpers/scroll-control';

const toClassName = props =>
  classify(
    prefix('Modal'),
    props.open && 'is-open',
    props.animated && 'is-animated'
  );

export class Modal extends React.Component {
  static propTypes = {
    animated: PropTypes.bool,
    children: PropTypes.node,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    type: PropTypes.string
  };

  static defaultProps = {
    type: 'dialog'
  };

  constructor(props) {
    super(props);

    this.modalRoot = document.createElement('div');
    this.modalRoot.className = toClassName(props);

    const bodyRect = document.body.getBoundingClientRect();
    this.isScrollbarVisible =
      bodyRect.left + bodyRect.right < window.innerWidth;
  }

  componentDidMount() {
    if (document) {
      document.body.appendChild(this.modalRoot);
    }
  }

  componentWillReceiveProps(newProps) {
    this.modalRoot.className = toClassName(newProps);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.open !== this.props.open) {
      if (this.props.open) {
        this.lastFocusedEl = document.activeElement;
        this.firstTabbableEl && this.firstTabbableEl.focus();

        const focusOnFirstElement = () => {
          const firstTabbableEl = getTabbableElements(this.modalRoot)[0];
          firstTabbableEl && firstTabbableEl.focus();
        };

        if (!this.props.animated) focusOnFirstElement();
        else setTimeout(focusOnFirstElement, 200);
        disableBodyScrolling();
      } else {
        this.lastFocusedEl && this.lastFocusedEl.focus();
        enableBodyScrolling();
      }
    }
  }

  componentWillUnmount() {
    if (document) {
      document.body.removeChild(this.modalRoot);
    }
  }

  handleKeyDown = evt => {
    if (evt.key === 'Tab') {
      const tabbableEls = getTabbableElements(this.modalRoot);
      if (!tabbableEls) return;

      if (!evt.shiftKey) {
        if (
          document.activeElement === tabbableEls[tabbableEls.length - 1] ||
          document.activeElement === document.body ||
          document.activeElement ===
            this.modalRoot.querySelector('[role="dialog"]')
        ) {
          evt.preventDefault();
          tabbableEls[0] && tabbableEls[0].focus();
        }
      } else {
        if (
          document.activeElement === tabbableEls[0] ||
          document.activeElement === document.body ||
          document.activeElement ===
            this.modalRoot.querySelector('[role="dialog"]')
        ) {
          evt.preventDefault();
          tabbableEls[tabbableEls.length - 1] &&
            tabbableEls[tabbableEls.length - 1].focus();
        }
      }
    } else if (evt.key === 'Escape') {
      this.props.onClose && this.props.onClose();
    }
  };

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
