import React from 'react';
import { RadioGroup } from '../../components/radio-group';
import { Radio } from '../../components/radio';
import { DocPage, Example } from '../../docs/docs-components';

export const RadioGroupPage = () => {
  return (
    <DocPage {...{
      componentName: 'Radio Group',
      propList: [
        {
          name: 'name',
          type: 'string',
          description: 'Name to assign to all members of this group'
        }, {
          name: 'onChange',
          type: 'function',
          description: 'Callback called with the new selected `value` whenever the selected item within this group changes'
        }, {
          name: 'value',
          type: 'function',
          description: 'Current selected `value` for this group'
        }, {
          name: 'children',
          type: 'node',
          description: 'Members of this group (should be of type `Radio`)'
        }
      ],
      examples: (<div>
        <Example {...{title: 'Radio group'}}>
          <RadioGroup name="group-1">
            <Radio value="1">Option one</Radio>
            <Radio value="2">Option two</Radio>
            <Radio value="3">Option three</Radio>
          </RadioGroup>
        </Example>
      </div>)
    }}/>
  );
}
