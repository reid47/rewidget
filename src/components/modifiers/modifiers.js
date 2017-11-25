import React from 'react';
import PropTypes from 'prop-types';
import { clsNs, truthyOrZero } from '../../util';
import { sizeVariants, toSizeName } from '../../sizes';

export const withModifiers = (Component) => {
  return class ModifiedComponent extends React.Component {
    static displayName = `withModifiers(${Component.name || Component})`;

    static propTypes = {
      ma: PropTypes.oneOf(sizeVariants),
      ml: PropTypes.oneOf(sizeVariants),
      mr: PropTypes.oneOf(sizeVariants),
      mt: PropTypes.oneOf(sizeVariants),
      mb: PropTypes.oneOf(sizeVariants),
      mv: PropTypes.oneOf(sizeVariants),
      mh: PropTypes.oneOf(sizeVariants),
      pa: PropTypes.oneOf(sizeVariants),
      pl: PropTypes.oneOf(sizeVariants),
      pr: PropTypes.oneOf(sizeVariants),
      pt: PropTypes.oneOf(sizeVariants),
      pb: PropTypes.oneOf(sizeVariants),
      pv: PropTypes.oneOf(sizeVariants),
      ph: PropTypes.oneOf(sizeVariants),
      c: PropTypes.string,
      bg: PropTypes.string,
      d: PropTypes.oneOf(['block', 'inline', 'inline-block', 'table', 'flex', 'none']),
      o: PropTypes.oneOf(['hidden', 'scroll', 'scroll-x', 'scroll-y'])
    };

    render() {
      const {
        ma, ml, mr, mt, mb, mv, mh, pa, pl, pr, pt, pb, pv, ph,
        c, bg, d, o, className, ...props
      } = this.props;

      const cns = clsNs(
        className,
        truthyOrZero(ma) && `mod-ma-${toSizeName(ma)}`,
        truthyOrZero(ml) && `mod-ml-${toSizeName(ml)}`,
        truthyOrZero(mr) && `mod-mr-${toSizeName(mr)}`,
        truthyOrZero(mt) && `mod-mt-${toSizeName(mt)}`,
        truthyOrZero(mb) && `mod-mb-${toSizeName(mb)}`,
        truthyOrZero(mv) && `mod-mv-${toSizeName(mv)}`,
        truthyOrZero(mh) && `mod-mh-${toSizeName(mh)}`,
        truthyOrZero(pa) && `mod-pa-${toSizeName(pa)}`,
        truthyOrZero(pl) && `mod-pl-${toSizeName(pl)}`,
        truthyOrZero(pr) && `mod-pr-${toSizeName(pr)}`,
        truthyOrZero(pt) && `mod-pt-${toSizeName(pt)}`,
        truthyOrZero(pb) && `mod-pb-${toSizeName(pb)}`,
        truthyOrZero(pv) && `mod-pv-${toSizeName(pv)}`,
        truthyOrZero(ph) && `mod-ph-${toSizeName(ph)}`,
        truthyOrZero(c) && `mod-c-${c}`,
        truthyOrZero(bg) && `mod-bg-${bg}`,
        truthyOrZero(d) && `mod-d-${d}`,
        truthyOrZero(o) && `mod-o-${o}`);

      return <Component {...{
        ...props,
        className: cns
      }} />;
    }
  }
}