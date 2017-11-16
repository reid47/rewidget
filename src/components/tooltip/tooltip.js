import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';

export default function withTooltip(Component) {
  return class ComponentWithTooltip extends React.Component {
    static propTypes = {
      tooltip: PropTypes.string,
      position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
      showTooltip: PropTypes.bool,
      trigger: PropTypes.oneOf(['manual', 'focus'])
    };

    static defaultProps = {
      tooltip: null,
      position: 'right',
      // showTooltip: false,
      // trigger: 'focus',
      showTooltip: true,
      trigger: 'manual'
    };

    render() {
      const {
        tooltip,
        position,
        showTooltip,
        trigger,
        className,
        ...props
      } = this.props;
      const manualOpen = trigger === 'manual' && showTooltip;

      if (!tooltip) {
        return <Component {...{ className, ...props }} />;
      }

      return (
        <div className={clsNs('tooltip-container')}>
          <Component
            {...{
              ...props,
              className: clsNs('tooltip-parent', className)
            }}
          />
          <div
            className={clsNs(
              'tooltip',
              `tooltip-position-${position}`,
              manualOpen && 'tooltip-is-open'
            )}>
            {tooltip}
          </div>
        </div>
      );
    }
  };
}
