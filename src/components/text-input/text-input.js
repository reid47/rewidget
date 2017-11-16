import React from 'react';
import PropTypes from 'prop-types';
import withKeyHandler from '../key-handler/key-handler';
import { clsNs, uniqueId } from '../../util';
import './text-input.css';

const KeyHandlingInput = withKeyHandler('input');

class TextInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    multiline: PropTypes.bool,
    suggestions: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    value: '',
    onChange: () => {},
    multiline: false,
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedSuggestion: -1,
      hideSuggestions: false
    };

    this.suggestionsId = uniqueId('suggestions');

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onArrowDown = this.onArrowDown.bind(this);
    this.onArrowUp = this.onArrowUp.bind(this);
  }

  onChange(evt) {
    const { onChange } = this.props;
    onChange && onChange(evt.target.value);
    this.setState({
      selectedSuggestion: -1,
      hideSuggestions: false
    });
  }

  onBlur() {
    this.setState({
      selectedSuggestion: -1,
      hideSuggestions: true
    });
  }

  onArrowDown(evt, suggestions) {
    evt.stopPropagation();
    evt.preventDefault();

    const { selectedSuggestion } = this.state;
    const newSelection =
      selectedSuggestion + 1 > suggestions.length - 1
        ? -1
        : selectedSuggestion + 1;

    this.setState({
      ...this.state,
      selectedSuggestion: newSelection
    });
  }

  onArrowUp(evt, suggestions) {
    evt.stopPropagation();
    evt.preventDefault();

    const { selectedSuggestion } = this.state;
    const newSelection =
      selectedSuggestion === -1
        ? suggestions.length - 1
        : selectedSuggestion - 1;

    this.setState({
      ...this.state,
      selectedSuggestion: newSelection
    });
  }

  onEnter(evt, suggestions) {
    evt.stopPropagation();
    evt.preventDefault();

    const { selectedSuggestion } = this.state;
    if (selectedSuggestion >= 0) {
      const newValue = suggestions[selectedSuggestion];
      if (newValue) {
        this.props.onChange && this.props.onChange(newValue);
      }
    }
    this.setState({ hideSuggestions: true });
  }

  onTab(evt, suggestions) {
    const { selectedSuggestion } = this.state;
    if (selectedSuggestion >= 0) {
      const newValue = suggestions[selectedSuggestion];
      if (newValue) {
        this.props.onChange && this.props.onChange(newValue);
      }
    }
    this.setState({ hideSuggestions: true });
  }

  onEscape(evt, suggestions) {
    evt.stopPropagation();
    evt.preventDefault();

    this.setState({ hideSuggestions: true });
  }

  render() {
    const { value, onChange, multiline, suggestions, ...props } = this.props;
    const { selectedSuggestion, hideSuggestions } = this.state;

    const filteredSuggestions = !value
      ? []
      : suggestions.filter(
          s => s.toLowerCase().indexOf(value.toLowerCase()) === 0
        );
    const showSuggestions = !hideSuggestions && filteredSuggestions.length > 0;

    if (multiline) {
      return (
        <textarea
          {...{
            ...props,
            className: clsNs('text-input', 'multiline'),
            value,
            onChange
          }}
        />
      );
    }

    return (
      <div className={clsNs('text-input-wrapper')}>
        <KeyHandlingInput
          {...{
            ...props,
            className: clsNs(
              'text-input',
              showSuggestions && 'has-suggestions'
            ),
            type: 'text',
            value,
            'aria-owns': showSuggestions ? this.suggestionsId : undefined,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onArrowDown: showSuggestions
              ? evt => this.onArrowDown(evt, filteredSuggestions)
              : null,
            onArrowUp: showSuggestions
              ? evt => this.onArrowUp(evt, filteredSuggestions)
              : null,
            onEnter: showSuggestions
              ? evt => this.onEnter(evt, filteredSuggestions)
              : null,
            onTab: showSuggestions
              ? evt => this.onTab(evt, filteredSuggestions)
              : null,
            onEscape: showSuggestions
              ? evt => this.onEscape(evt, filteredSuggestions)
              : null
          }}
        />
        {showSuggestions && (
          <ul
            {...{
              id: this.suggestionsId,
              className: clsNs('text-input-suggestions'),
              role: 'listbox'
            }}>
            {filteredSuggestions.map((s, i) => (
              <li
                {...{
                  className: clsNs(
                    'text-input-suggestion',
                    i === selectedSuggestion && 'selected'
                  ),
                  role: 'option',
                  key: i
                }}>
                <span className="match">{s.substring(0, value.length)}</span>
                {s.substring(value.length)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TextInput;
