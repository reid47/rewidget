import React from 'react';
import PropTypes from 'prop-types';
import './ProgressCircle.css';
import {clsNs} from '../../util';
import {
  sizeVariants, defaultSize, formatSize, rawSize, times
} from '../../sizes';

const CircleSvg = ({size, strokeDasharray, strokeDashoffset}) => (
  <svg className="svg" width="100%" height="100%">
    <circle {...{
      className: 'bg-circle',
      cx: '50%',
      cy: '50%',
      r: `calc(50% - ${formatSize(size, times(0.25))})`,
      strokeWidth: formatSize(size, times(0.25))
    }}/>
    <circle {...{
      className: 'circle',
      cx: '50%',
      cy: '50%',
      r: `calc(50% - ${formatSize(size, times(0.25))})`,
      strokeWidth: formatSize(size, times(0.25)),
      strokeDasharray,
      strokeDashoffset
    }}/>
  </svg>
);

export default class ProgressCircle extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    size: PropTypes.oneOf(sizeVariants),
    format: PropTypes.func,
    displayLabel: PropTypes.bool,
    rounded: PropTypes.bool
  };

  static defaultProps = {
    value: -1,
    minValue: 0,
    maxValue: 100,
    size: defaultSize,
    format: text => `${text}%`,
    displayLabel: false,
    rounded: false
  };

  render() {
    const {
      value, minValue, maxValue, size, format, displayLabel, rounded
    } = this.props;

    const normalizedValue = Math.max(Math.min(value, maxValue), minValue);
    const indeterminate = value < 0;
    const diameter = rawSize(size, times(5 * 16));
    const progress = normalizedValue / maxValue;
    const circumference = Math.PI * diameter;
    const strokeOffset = (1 - progress) * circumference;

    return (
      <div {...{
        role: 'progressbar',
        className: clsNs(
          'progress-circle',
          indeterminate && 'indeterminate',
          rounded && 'rounded'),
        'aria-valuenow': !indeterminate ? normalizedValue : undefined,
        'aria-valuemin': !indeterminate ? minValue : undefined,
        'aria-valuemax': !indeterminate ? maxValue : undefined,
        style: {
          width: formatSize(size, times(5)),
          height: formatSize(size, times(5)),
          fontSize: formatSize(size)
        }
      }}>
        {!indeterminate &&
          <CircleSvg {...{
            size,
            strokeDasharray: circumference,
            strokeDashoffset: strokeOffset
          }}/>}
        {!indeterminate && displayLabel &&
          <div {...{
            className: 'progress-label'
          }}>{format(normalizedValue)}</div>}
        {indeterminate &&
          <CircleSvg {...{
            size,
            strokeDasharray: circumference,
            strokeDashoffset: circumference * 0.6
          }}/>}
      </div>
    );
  }
}
