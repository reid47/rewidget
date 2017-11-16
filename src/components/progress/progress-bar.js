import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';
import {
  sizeVariants,
  defaultSize,
  formatSize,
  rawSize,
  times
} from '../../sizes';

const BarSvg = ({ size, strokeDasharray, strokeDashoffset }) => (
  <svg className="svg" width={formatSize(size, times(0.25))}>
    <rect
      {...{
        className: 'bg-bar',
        width: '100%',
        height: formatSize(size, times(0.25))
      }}
    />
    <circle
      {...{
        className: 'bar',
        width: '50%',
        height: formatSize(size, times(0.25))
      }}
    />
  </svg>
);

export default class ProgressBar extends React.Component {
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
      value,
      minValue,
      maxValue,
      size,
      format,
      displayLabel,
      rounded
    } = this.props;

    const normalizedValue = Math.max(Math.min(value, maxValue), minValue);
    const indeterminate = value < 0;
    const diameter = rawSize(size, times(5 * 16));
    const progress = normalizedValue / maxValue;
    const circumference = Math.PI * diameter;
    const strokeOffset = (1 - progress) * circumference;

    return (
      <div
        {...{
          role: 'progressbar',
          className: clsNs(
            'progress-bar',
            indeterminate && 'indeterminate',
            rounded && 'rounded'
          ),
          'aria-valuenow': !indeterminate ? normalizedValue : undefined,
          'aria-valuemin': !indeterminate ? minValue : undefined,
          'aria-valuemax': !indeterminate ? maxValue : undefined,
          style: {
            width: '100%',
            height: formatSize(size, times(0.25)),
            fontSize: formatSize(size)
          }
        }}>
        {!indeterminate && (
          <BarSvg
            {...{
              size,
              strokeDasharray: circumference,
              strokeDashoffset: strokeOffset
            }}
          />
        )}
        {!indeterminate &&
          displayLabel &&
          false && (
            <div
              {...{
                className: 'progress-label'
              }}>
              {format(normalizedValue)}
            </div>
          )}
        {indeterminate && (
          <BarSvg
            {...{
              size,
              strokeDasharray: circumference,
              strokeDashoffset: circumference * 0.6
            }}
          />
        )}
      </div>
    );
  }
}
