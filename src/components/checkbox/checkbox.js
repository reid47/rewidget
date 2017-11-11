import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';
import { formatSize, sizeVariants } from '../../sizes';
import withKeyHandlers from '../KeyHandler';
import './checkbox.css';

const EnhancedDiv = withKeyHandlers('div');

class Checkbox extends React.Component {
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
    size: 'normal',
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
      onChange, size, className, threeState, value, disabled, ...props
    } = this.props;

    const indeterminate = threeState && value === null;
    const checked = !indeterminate && !!value;

    return (<EnhancedDiv {...{
      role: 'checkbox',
      className: clsNs(
        'checkbox',
        className,
        disabled && 'disabled',
        checked && 'checked',
        indeterminate && 'indeterminate'),
      style: {
        fontSize: formatSize(size),
        width: formatSize(size),
        height: formatSize(size),
      },
      tabIndex: !disabled ? 0 : undefined,
      'aria-checked': indeterminate ? 'mixed' : checked ? 'true' : 'false',
      'aria-disabled': disabled ? 'true' : undefined,
      onClick: this.onChange,
      onSpace: this.onChange
    }}>
      <span className={clsNs('checkbox-icon')}>
        {checked && <span className={clsNs('checkbox-mark')} />}
      </span>
    </EnhancedDiv>);
  }
}

export default Checkbox;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { clsNs } from '../../util';
// import { formatSize, sizeVariants } from '../../sizes';
// import './checkbox.css';
//
// class Checkbox extends React.Component {
//   static propTypes = {
//     value: PropTypes.bool,
//     onChange: PropTypes.func,
//     className: PropTypes.string,
//     size: PropTypes.oneOf(sizeVariants),
//     threeState: PropTypes.bool
//   };
//
//   static defaultProps = {
//     value: false,
//     onChange: null,
//     className: '',
//     size: 'normal',
//     threeState: false
//   };
//
//   componentDidMount() {
//     if (this.props.threeState) {
//       this.el.indeterminate = this.props.value === null;
//     }
//   }
//
//   componentDidUpdate(prevProps) {
//     if (this.props.threeState && prevProps.value !== this.props.value) {
//       this.el.indeterminate = this.props.value === null;
//     }
//   }
//
//   render() {
//     const {
//       onChange, size, className, threeState, value, disabled, ...props
//     } = this.props;
//
//     const indeterminate = threeState && value === null;
//     const checked = !indeterminate && !!value;
//
//     return (<div {...{
//       className: clsNs(
//         'checkbox',
//         className,
//         disabled && 'disabled',
//         checked && 'checked',
//         indeterminate && 'indeterminate'),
//       style: {
//         fontSize: formatSize(size),
//         width: formatSize(size),
//         height: formatSize(size)
//       },
//     }}>
//         <input {...{
//         ...props,
//         ref: el => this.el = el,
//         type: 'checkbox',
//         checked,
//         disabled,
//         onChange: onChange ? (evt => onChange(
//           threeState && evt.target.indeterminate
//             ? null
//             : evt.target.checked)) : null
//       }}/>
//     </div>);
//   }
// }
//
// export default Checkbox;
