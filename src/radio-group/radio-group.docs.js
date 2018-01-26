import React from 'react';
import { RadioGroup } from '../../components/radio-group';
import { Radio } from '../../components/radio';
import { DocPage, Example } from '../../docs/docs-components';

export class RadioGroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '2'
    };
  }

  render() {
    return (
      <DocPage
        {...{
          componentName: 'Radio Group',
          propList: [
            {
              name: 'name',
              type: 'string',
              description: 'Name to assign to all members of this group'
            },
            {
              name: 'onChange',
              type: 'function',
              description:
                'Callback called with the new selected `value` whenever the selected item within this group changes'
            },
            {
              name: 'value',
              type: 'function',
              description: 'Current selected `value` for this group'
            },
            {
              name: 'children',
              type: 'node',
              description: 'Members of this group (should be of type `Radio`)'
            }
          ],
          examples: (
            <div>
              <Example {...{ title: 'Controlled radio group' }}>
                <RadioGroup
                  name="group-1"
                  value={this.state.selectedValue}
                  onChange={newValue =>
                    this.setState({ selectedValue: newValue })
                  }>
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
            </div>
          )
        }}
      />
    );
  }
}
