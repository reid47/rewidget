import React from 'react';
import { Radio } from '../../components/radio';
import { DocPage, Example } from '../../docs/docs-components';

export const RadioPage = () => {
  return (
    <DocPage {...{
      componentName: 'Radio',
      propList: [
        {
          name: 'size',
          type: 'string (possible values: "sm", "md", "lg")',
          description: 'Size of the radio (adds the `is-size-{size}` class)'
        }, {
          name: 'inputClassName',
          type: 'string',
          description: 'Class to put on the inner `input` element (hidden by default)'
        }, {
          name: 'labelClassName',
          type: 'string',
          description: 'Class to put on the inner `label` element'
        }, {
          name: 'widgetClassName',
          type: 'string',
          description: 'Class to put on the inner "widget" (the visible part of the custom radio)'
        }, {
          name: 'className',
          type: 'string',
          description: 'Class to put on the outer `div` element'
        }, {
          name: 'onChange',
          type: 'function',
          description: 'Callback that will be called with the new `checked` value whenever the `checked` state changes'
        }, {
          name: 'children',
          type: 'node',
          description: 'Contents to put within the inner `label` element'
        }, {
          name: '...props',
          description: 'All other props will be passed to the inner `input[type="radio"]` element'
        }
      ],
      examples: (<div>
        <Example {...{title: 'Simple radio'}}>
          <Radio defaultChecked/>
        </Example>
        <Example {...{title: 'Radio with label contents'}}>
          <Radio>I am a label within a radio</Radio>
        </Example>
        <Example {...{title: 'Radio sizes'}}>
          <div>
            <Radio size="sm" name="ex3" className="mt-1">I am a label within a radio</Radio>
            <Radio size="md" name="ex3" className="mt-1">I am a label within a radio</Radio>
            <Radio size="lg" name="ex3" className="mt-1">I am a label within a radio</Radio>
          </div>
        </Example>
        <Example {...{title: 'Disabled radio'}}>
          <div>
            <Radio disabled className="mt-1">I cannot be checked</Radio>
            <Radio defaultChecked disabled className="mt-1">I cannot be unchecked</Radio>
          </div>
        </Example>
      </div>)
    }}/>
  );
}
