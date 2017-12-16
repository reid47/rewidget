import React from 'react';
import { Textbox } from '../../components/textbox';
import { DocPage, Example } from '../../docs/docs-components';

export const TextboxPage = () => {
  return (
    <DocPage {...{
      componentName: 'Textbox',
      propList: [
        {
          name: 'size',
          type: 'string (possible values: "sm", "md", "lg")',
          description: 'Size of the textbox (adds the `is-size-{size}` class)'
        }, {
          name: 'password',
          type: 'boolean',
          description: 'Whether or not this is a password input'
        }, {
          name: 'multiline',
          type: 'boolean',
          description: 'Whether or not this textbox supports multiple lines'
        }, {
          name: 'rows',
          type: 'number',
          description: 'When `multiline`, the number of text rows to display without needing to scroll down'
        }, {
          name: 'className',
          type: 'string',
          description: 'Class to put on the `input`/`textarea` element'
        }, {
          name: 'onChange',
          type: 'function',
          description: 'Callback that will be called with the new `value` whenever the value changes'
        }, {
          name: '...props',
          description: 'All other props will be passed to the `input`/`textarea` element'
        }
      ],
      examples: (<div>
        <Example {...{title: 'Single-line textbox'}}>
          <Textbox/>
        </Example>
        <Example {...{title: 'Multi-line textbox'}}>
          <Textbox multiline/>
        </Example>
        <Example {...{title: 'Textbox with placeholder'}}>
          <Textbox placeholder="Enter something..."/>
        </Example>
        <Example {...{title: 'Single-line textbox sizes'}}>
          <div>
            <Textbox size="sm"/>
            <Textbox size="md" className="mt-1"/>
            <Textbox size="lg" className="mt-1"/>
          </div>
        </Example>
        <Example {...{title: 'Multi-line textbox sizes'}}>
          <div>
            <Textbox multiline size="sm"/>
            <Textbox multiline size="md" className="mt-1"/>
            <Textbox multiline size="lg" className="mt-1"/>
          </div>
        </Example>
      </div>)
    }}/>
  );
}
