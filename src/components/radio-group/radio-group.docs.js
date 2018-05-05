import React, { Component } from 'react';
import { RadioGroup } from './radio-group';
import { Radio } from '../radio/radio';
import { DocPage, Example } from '../../../docs/components';

export default class RadioGroupDocs extends Component {
  state = {
    selectedValue: '2'
  };

  render() {
    return (
      <DocPage component={RadioGroup}>
        <Example {...{ title: 'Controlled radio group' }}>
          <RadioGroup
            name="group-1"
            value={this.state.selectedValue}
            onChange={newValue => this.setState({ selectedValue: newValue })}>
            <Radio value="1">Option one</Radio>
            <Radio value="2">Option two</Radio>
            <Radio value="3">Option three</Radio>
          </RadioGroup>
        </Example>
        <Example {...{ title: 'Uncontrolled radio group' }}>
          <RadioGroup name="group-2">
            <Radio value="1">Option one</Radio>
            <Radio value="2">Option two</Radio>
            <Radio value="3">Option three</Radio>
          </RadioGroup>
        </Example>
      </DocPage>
    );
  }
}
