import { getScrollbarWidth } from './scrollbar-width';

const paddingRightAttr = 'data-rw-padding-right';
const overflowAttr = 'data-rw-overflow';
let scrollbarWidth;

export const disableBodyScrolling = () => {
  if (!document) return;

  scrollbarWidth = scrollbarWidth || getScrollbarWidth();

  const padding = document.body.style.paddingRight;
  if (padding) {
    document.body.setAttribute(paddingRightAttr, padding);
  }

  const overflow = document.body.style.overflow;
  if (overflow) {
    document.body.setAttribute(overflowAttr, overflow);
  }

  const computedPadding = getComputedStyle(
    document.body,
    null
  ).getPropertyValue('padding-right');

  document.body.style.paddingRight = `${scrollbarWidth +
    parseFloat(computedPadding)}px`;
};

export const enableBodyScrolling = () => {
  if (!document) return;

  const savedPadding = document.body.getAttribute(paddingRightAttr);
  const savedOverflow = document.body.getAttribute(overflowAttr);
  document.body.style.paddingRight = savedPadding;
  document.body.style.overflow = savedOverflow;
  document.body.removeAttribute(paddingRightAttr);
  document.body.removeAttribute(overflowAttr);
};
