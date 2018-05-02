import React from 'react';
import PropTypes from 'prop-types';
import { classify, prefix } from '../../util';
import { Chip } from '../chip/chip';

export class ChipInput extends React.Component {
  static propTypes = {
    allowDuplicates: PropTypes.bool,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    value: PropTypes.any
  };

  constructor(props) {
    super(props);

    this.state = {
      currentText: '',
      inputHasFocus: false
    };
  }

  onInputChange = evt => {
    this.setState({ currentText: evt.target.value });
  };

  onInputFocus = () => {
    this.setState({ inputHasFocus: true });
  };

  onInputBlur = () => {
    this.setState({ inputHasFocus: false });
  };

  onInputKeyDown = evt => {
    const { currentText } = this.state;
    if (evt.key === 'Enter') {
      evt.preventDefault();
      const currentValues = this.props.value || [];
      this.setState({ currentText: '' });

      if (
        this.props.allowDuplicates ||
        currentValues.indexOf(currentText) === -1
      ) {
        this.props.onChange &&
          this.props.onChange([...currentValues, currentText]);
      }
    } else if (evt.key === 'ArrowLeft' || evt.key === 'Backspace') {
      if (this.inputElement && this.inputElement.selectionStart === 0) {
        evt.preventDefault();
        evt.stopPropagation();
        const lastChip = this.inputElement.previousElementSibling;
        lastChip && lastChip.focus();
      }
    } else if (evt.key === 'ArrowRight') {
      if (
        this.inputElement &&
        this.inputElement.selectionStart === currentText.length
      ) {
        evt.preventDefault();
        const firstChip =
          this.inputElement.parentNode &&
          this.inputElement.parentNode.firstElementChild;
        firstChip && firstChip.focus();
      }
    }
  };

  onChipKeyDown = i => {
    return evt => {
      if (evt.key === 'Delete' || evt.key === 'Backspace') {
        const currentValues = this.props.value || [];
        if (currentValues.length) {
          const newValues = currentValues.filter((val, j) => j !== i);

          this.props.onChange && this.props.onChange(newValues);

          const previousChip = evt.target.previousElementSibling;
          if (previousChip) {
            previousChip.focus();
          } else if (this.inputElement) {
            this.inputElement.focus();
          }
        }
      } else if (evt.key === 'ArrowLeft') {
        evt.preventDefault();
        evt.stopPropagation();
        const previousChip = evt.target.previousElementSibling;
        if (previousChip) {
          previousChip.focus();
        } else if (this.inputElement) {
          this.inputElement.focus();
        }
      } else if (evt.key === 'ArrowRight') {
        evt.preventDefault();
        evt.stopPropagation();
        const nextChip = evt.target.nextElementSibling;
        if (nextChip) {
          nextChip.focus();
        } else if (this.inputElement) {
          this.inputElement.focus();
        }
      }
    };
  };

  onChipClick = () => {
    return evt => {
      evt.preventDefault();
      evt.stopPropagation();
    };
  };

  onChipIconClick = i => {
    return evt => {
      evt.preventDefault();
      evt.stopPropagation();

      const currentValues = this.props.value || [];
      if (currentValues.length) {
        const newValues = currentValues.filter((val, j) => j !== i);

        this.props.onChange && this.props.onChange(newValues);
        this.inputElement && this.inputElement.focus();
      }
    };
  };

  render() {
    const { size, value, className, inputClassName, ...props } = this.props;

    const { currentText, inputHasFocus } = this.state;

    const wrapperClasses = classify(
      prefix('ChipInput'),
      inputHasFocus && 'is-focused',
      className
    );

    const inputClasses = classify(
      prefix('ChipInput-input'),
      size && `is-size-${size}`,
      inputClassName
    );

    const input = (
      <input
        {...{
          ...props,
          ref: el => (this.inputElement = el),
          value: currentText,
          className: inputClasses,
          type: 'text',
          onChange: this.onInputChange,
          onKeyDown: this.onInputKeyDown,
          onFocus: this.onInputFocus,
          onBlur: this.onInputBlur
        }}
      />
    );

    const chips =
      value &&
      value.map((val, i) => (
        <Chip
          key={i}
          size={size}
          role="option"
          aria-selected="false"
          onKeyDown={this.onChipKeyDown(i)}
          onClick={this.onChipClick(i)}
          iconOnClick={this.onChipIconClick(i)}>
          {val}
        </Chip>
      ));

    return (
      <div // eslint-disable-line jsx-a11y/click-events-have-key-events
        role="listbox"
        tabIndex="-1"
        onClick={() => this.inputElement && this.inputElement.focus()}
        className={wrapperClasses}>
        {chips}
        {input}
      </div>
    );
  }
}
