import React from 'react';
import PropTypes from 'prop-types';
import { cls } from '../../util';
import { sizeVariants } from '../../sizes';
import { withKeyHandler } from '../key-handler';

const EnhancedDiv = withKeyHandler('div');

export class Checkbox extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    size: PropTypes.oneOf(sizeVariants),
    threeState: PropTypes.bool
  };

  static defaultProps = {
    value: false,
    onChange: null,
    className: '',
    size: 'm',
    threeState: false
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    if (this.props.onChange) {
      evt.stopPropagation();
      evt.preventDefault();
      this.props.onChange(!this.props.value);
    }
  }

  render() {
    const {
      onChange,
      size,
      className,
      threeState,
      value,
      disabled,
      ...props
    } = this.props;

    const indeterminate = threeState && value === null;
    const checked = !indeterminate && !!value;

    return (
      <EnhancedDiv
        {...{
          ...props,
          role: 'checkbox',
          className: cls(
            'checkbox',
            className,
            disabled && 'is-disabled',
            checked && 'is-checked',
            indeterminate && 'is-indeterminate',
            `is-size-${size}`
          ),
          tabIndex: !disabled ? 0 : undefined,
          'aria-checked': indeterminate ? 'mixed' : checked ? 'true' : 'false',
          'aria-disabled': disabled ? 'true' : undefined,
          onClick: this.onChange,
          onSpace: this.onChange
        }}>
        <span className={cls('checkbox-icon')}>
          {checked && <span className={cls('checkbox-mark')} />}
        </span>
      </EnhancedDiv>
    );
  }
}
