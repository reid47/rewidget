import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix } from '../../util';

export class Textbox extends React.Component {
  static propTypes = {
    size: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    multiline: PropTypes.bool,
    autoresize: PropTypes.bool,
    rows: PropTypes.number,
    password: PropTypes.bool
  };

  static defaultProps = {
    rows: 2
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.textarea) {
      const initialHeight = (this.textarea.getBoundingClientRect
        && this.textarea.getBoundingClientRect().height)
        || this.textarea.offsetHeight || this.textarea.clientHeight;

      this.textareaInitialHeight = initialHeight;
    }
  }

  onChange(evt) {
    const { onChange, multiline, autoresize } = this.props;
    onChange && onChange(evt.target.value);

    if (multiline && autoresize && this.textarea) {
      this.textarea.style.height = 0;
      this.textarea.style.height =
        Math.max(this.textareaInitialHeight, this.textarea.scrollHeight) + 'px';
    }
  }

  render() {
    const {
      size,
      value,
      onChange,
      multiline,
      autoresize,
      rows,
      password,
      className,
      ...props
    } = this.props;

    const textboxClasses = classify(
      prefix('Textbox'),
      multiline && 'is-multiline',
      size && `is-size-${size}`,
      className);

    if (multiline) {
      return <textarea {...{
        ref: el => this.textarea = el,
        ...props,
        className: textboxClasses,
        onChange: this.onChange,
        rows
      }}/>;
    }

    return (
      <input {...{
        ...props,
        className: textboxClasses,
        type: password ? 'password' : 'text',
        value,
        onChange: this.onChange
      }}/>
    );
  }
}
