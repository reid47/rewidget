import React from 'react';
import { TextInput } from '../../components/text-input';
import { DocPage, Example } from '../../docs/docs-components';
import { SearchIcon } from '../../components/icons';

export const TextInputPage = () => {
  return (
    <DocPage {...{
      componentName: 'Text Input',
      propList: [
        {
          name: 'size',
          type: 'string (possible values: "sm", "md", "lg")',
          description: 'Size of the text input (adds the `is-size-{size}` class)'
        }, {
          name: 'password',
          type: 'boolean',
          description: 'Whether or not this is a password input'
        }, {
          name: 'multiline',
          type: 'boolean',
          description: 'Whether or not this text input supports multiple lines (adds the `is-multiline` class)'
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
        <Example {...{title: 'Single-line text input'}}>
          <TextInput/>
        </Example>
        <Example {...{title: 'Single-line text input with icon'}}>
          <TextInput icon={<SearchIcon />}/>
        </Example>
        <Example {...{title: 'Password input'}}>
          <TextInput password/>
        </Example>
        <Example {...{title: 'Text input with placeholder'}}>
          <TextInput placeholder="Enter something..."/>
        </Example>
        <Example {...{title: 'Single-line text input sizes'}}>
          <div>
            <TextInput size="sm"/>
            <TextInput size="md" className="mt-1"/>
            <TextInput size="lg" className="mt-1"/>
          </div>
        </Example>
        <Example {...{title: 'Single-line text input sizes with icons'}}>
          <div>
            <TextInput size="sm" icon={<SearchIcon />}/>
            <TextInput size="md" icon={<SearchIcon />} className="mt-1"/>
            <TextInput size="lg" icon={<SearchIcon />} className="mt-1"/>
          </div>
        </Example>
        <Example {...{title: 'Multi-line text input'}}>
          <TextInput multiline/>
        </Example>
        <Example {...{title: 'Multi-line text input with icon'}}>
          <TextInput multiline icon={<SearchIcon />}/>
        </Example>
        <Example {...{title: 'Multi-line text input sizes'}}>
          <div>
            <TextInput multiline size="sm"/>
            <TextInput multiline size="md" className="mt-1"/>
            <TextInput multiline size="lg" className="mt-1"/>
          </div>
        </Example>
      </div>)
    }}/>
  );
}
