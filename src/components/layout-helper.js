import React from 'react';
import PropTypes from 'prop-types';
import { sizeVariants } from '../sizes';
import { clsNs } from '../util';

const colorVariants = ['primary', 'secondary', 'alert', 'success',
  'warning', 'light', 'dark'];

const sizeToSizeVariant = (prefix, size) =>
  size === true ? `${prefix}default` :
    size === false ? `${prefix}zero` : `${prefix}${size}`;

export const withLayoutHelper = (Component) => {
  return class WrappedComponent extends React.Component {
    static propTypes = {
      ...Component.propTypes,
      ma: PropTypes.oneOf([true, false, ...sizeVariants]),
      ml: PropTypes.oneOf([true, false, ...sizeVariants]),
      mr: PropTypes.oneOf([true, false, ...sizeVariants]),
      mt: PropTypes.oneOf([true, false, ...sizeVariants]),
      mb: PropTypes.oneOf([true, false, ...sizeVariants]),
      pa: PropTypes.oneOf([true, false, ...sizeVariants]),
      pl: PropTypes.oneOf([true, false, ...sizeVariants]),
      pr: PropTypes.oneOf([true, false, ...sizeVariants]),
      pt: PropTypes.oneOf([true, false, ...sizeVariants]),
      pb: PropTypes.oneOf([true, false, ...sizeVariants]),
      scroll: PropTypes.oneOf(['x', 'y', 'both', 'none']),
      textColor: PropTypes.oneOf(colorVariants),
      bgColor: PropTypes.oneOf(colorVariants),
      size: PropTypes.oneOf(sizeVariants)
    };

    render() {
      const {
        className, ma, ml, mr, mt, mb, pa, pl, pr, pt, pb, 
        scroll, textColor, bgColor, size, ...props
      } = this.props;

      return <Component {...{
        ...props,
        className: clsNs(
          className,
          (ma || ma === false) && sizeToSizeVariant('has-ma-', ma),
          (ml || ml === false) && sizeToSizeVariant('has-ml-', ml),
          (mr || mr === false) && sizeToSizeVariant('has-mr-', mr),
          (mt || mt === false) && sizeToSizeVariant('has-mt-', mt),
          (mb || mb === false) && sizeToSizeVariant('has-mb-', mb),
          (pa || pa === false) && sizeToSizeVariant('has-pa-', pa),
          (pl || pl === false) && sizeToSizeVariant('has-pl-', pl),
          (pr || pr === false) && sizeToSizeVariant('has-pr-', pr),
          (pt || pt === false) && sizeToSizeVariant('has-pt-', pt),
          (pb || pb === false) && sizeToSizeVariant('has-pb-', pb),
          scroll && `scroll-${scroll}`,
          textColor && `text-color-${textColor}`,
          bgColor && `bg-color-${bgColor}`,
          size && `is-size-${size}`)
      }} />;
    }
  }
}