import React from 'react';
import { Toggle } from '../../components/toggle';
import { DocPage, Example } from '../../docs/docs-components';

export const TogglePage = () => {
  return (
    <DocPage {...{
      componentName: 'Toggle',
      propList: [
        {
          name: 'size',
          type: 'string (possible values: "sm", "md", "lg")',
          description: 'Size of the toggle (adds the `is-size-{size}` class)'
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
          description: 'Class to put on the inner "widget" (the visible part of the toggle)'
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
          description: 'All other props will be passed to the inner `input[type="checkbox"]` element'
        }
      ],
      examples: (<div>
        <Example {...{title: 'Simple toggle'}}>
          <Toggle defaultChecked/>
        </Example>
        <Example {...{title: 'Toggle with label contents'}}>
          <Toggle>I am a label within a toggle</Toggle>
        </Example>
        <Example {...{title: 'Toggle sizes'}}>
          <div>
            <Toggle size="sm">I am a label within a toggle</Toggle>
            <Toggle size="md" className="mt-1">I am a label within a toggle</Toggle>
            <Toggle size="lg" className="mt-1">I am a label within a toggle</Toggle>
          </div>
        </Example>
        <Example {...{title: 'Disabled toggle'}}>
          <div>
            <Toggle disabled className="mt-1">I cannot be checked</Toggle>
            <Toggle defaultChecked disabled className="mt-1">I cannot be unchecked</Toggle>
          </div>
        </Example>
      </div>)
    }}/>
  );
}
