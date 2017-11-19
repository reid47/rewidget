import React from 'react';
import PropTypes from 'prop-types';
import { clsNs, noop } from '../../util';

export class TextBox extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    multiline: PropTypes.bool,
    autoresize: PropTypes.bool,
    rows: PropTypes.number
  };

  static defaultProps = {
    value: '',
    onChange: noop,
    multiline: false,
    autoresize: false,
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
    onChange(evt.target.value);

    if (multiline && autoresize && this.textarea) {
      this.textarea.style.height = 0;
      this.textarea.style.height = 
        Math.max(this.textareaInitialHeight, this.textarea.scrollHeight) + 'px';
    }
  }

  render() {
    const { value, multiline, autoresize, rows, ...props } = this.props;
 
    if (multiline) {
      return <textarea {...{
        ref: textarea => this.textarea = textarea,
        ...props,
        className: clsNs('textbox', 'multiline', autoresize && 'autoresize'),
        onChange: this.onChange,
        rows
      }}/>;
    }

    return (
      <input {...{
        ...props,
        className: clsNs('textbox'),
        type: 'text',
        value,
        onChange: this.onChange
      }}/>
    );
  }
}