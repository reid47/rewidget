import React from 'react';
import { Checkbox } from '../../components/checkbox';
import { DocPage, Example } from '../../docs/docs-components';

export const CheckboxPage = () => {
  return (
    <DocPage
      {...{
        componentName: 'Checkbox',
        propList: [
          {
            name: 'size',
            type: 'string (possible values: "sm", "md", "lg")',
            description:
              'Size of the checkbox (adds the `is-size-{size}` class)'
          },
          {
            name: 'inputClassName',
            type: 'string',
            description:
              'Class to put on the inner `input` element (hidden by default)'
          },
          {
            name: 'labelClassName',
            type: 'string',
            description: 'Class to put on the inner `label` element'
          },
          {
            name: 'widgetClassName',
            type: 'string',
            description:
              'Class to put on the inner "widget" (the visible part of the custom checkbox)'
          },
          {
            name: 'className',
            type: 'string',
            description: 'Class to put on the outer `div` element'
          },
          {
            name: 'onChange',
            type: 'function',
            description:
              'Callback that will be called with the new `checked` value whenever the `checked` state changes'
          },
          {
            name: 'children',
            type: 'node',
            description: 'Contents to put within the inner `label` element'
          },
          {
            name: '...props',
            description:
              'All other props will be passed to the inner `input[type="checkbox"]` element'
          }
        ],
        examples: (
          <div>
            <Example {...{ title: 'Simple checkbox' }}>
              <Checkbox defaultChecked />
            </Example>
            <Example {...{ title: 'Checkbox with label contents' }}>
              <Checkbox>I am a label within a checkbox</Checkbox>
            </Example>
            <Example {...{ title: 'Checkbox sizes' }}>
              <div>
                <Checkbox size="sm">I am a label within a checkbox</Checkbox>
                <Checkbox size="md" className="mt-1">
                  I am a label within a checkbox
                </Checkbox>
                <Checkbox size="lg" className="mt-1">
                  I am a label within a checkbox
                </Checkbox>
              </div>
            </Example>
            <Example {...{ title: 'Disabled checkbox' }}>
              <div>
                <Checkbox disabled className="mt-1">
                  I cannot be checked
                </Checkbox>
                <Checkbox defaultChecked disabled className="mt-1">
                  I cannot be unchecked
                </Checkbox>
              </div>
            </Example>
          </div>
        )
      }}
    />
  );
};
