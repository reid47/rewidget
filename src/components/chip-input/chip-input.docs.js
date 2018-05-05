import React, { Component } from 'react';
import { ChipInput } from '../chip-input/chip-input';
import { DocPage, Example } from '../../../docs/components';

export default class ChipInputPage extends Component {
  state = {
    example1: [],
    example2: ['One', 'Two', 'Three'],
    example3: []
  };

  render() {
    return (
      <DocPage component={ChipInput}>
        <Example {...{ title: 'Basic chip input' }}>
          <ChipInput
            value={this.state.example1}
            onChange={newValue => this.setState({ example1: newValue })}
          />
        </Example>
        <Example {...{ title: 'Chip input with some values' }}>
          <ChipInput
            value={this.state.example2}
            onChange={newValue => this.setState({ example2: newValue })}
          />
        </Example>
        <Example {...{ title: 'Chip input with a placeholder' }}>
          <ChipInput
            placeholder="Enter something..."
            value={this.state.example3}
            onChange={newValue => this.setState({ example3: newValue })}
          />
        </Example>
      </DocPage>
    );
  }
}
