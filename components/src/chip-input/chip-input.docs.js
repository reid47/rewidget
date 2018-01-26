import React from 'react';
import { ChipInput } from '../chip-input/chip-input';
import { DocPage, Example } from '../../docs/docs-components';

export class ChipInputPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      example1: [],
      example2: ['One', 'Two', 'Three'],
      example3: []
    };
  }

  render() {
    return (
      <DocPage
        {...{
          componentName: 'Chip Input',
          propList: [
            {
              name: 'size',
              type: 'string (possible values: "sm", "md", "lg")',
              description:
                'Size of the text input (adds the `is-size-{size}` class)'
            },
            {
              name: 'password',
              type: 'boolean',
              description: 'Whether or not this is a password input'
            },
            {
              name: 'multiline',
              type: 'boolean',
              description:
                'Whether or not this text input supports multiple lines (adds the `is-multiline` class)'
            },
            {
              name: 'rows',
              type: 'number',
              description:
                'When `multiline`, the number of text rows to display without needing to scroll down'
            },
            {
              name: 'className',
              type: 'string',
              description: 'Class to put on the `input`/`textarea` element'
            },
            {
              name: 'onChange',
              type: 'function',
              description:
                'Callback that will be called with the new `value` whenever the value changes'
            },
            {
              name: '...props',
              description:
                'All other props will be passed to the `input`/`textarea` element'
            }
          ],
          examples: (
            <div>
              <Example {...{ title: 'Basic chip input' }}>
                <ChipInput value={this.state.example1}
                  onChange={newValue => this.setState({ example1: newValue })}/>
              </Example>
              <Example {...{ title: 'Chip input with some values' }}>
                <ChipInput
                  value={this.state.example2}
                  onChange={newValue => this.setState({ example2: newValue })}
                />
              </Example>
              <Example {...{ title: 'Chip input with a placeholder' }}>
                <ChipInput placeholder="Enter something..." value={this.state.example3}
                  onChange={newValue => this.setState({ example3: newValue })}/>
              </Example>
            </div>
          )
        }}
      />
    );
  }
}
