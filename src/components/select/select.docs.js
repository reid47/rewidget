import React from 'react';
import { Select } from '../../components/select';
import { DocPage, Example } from '../../docs/docs-components';

export const SelectPage = () => {
  return (
    <DocPage {...{
      componentName: 'Select',
      propList: [
        {
          name: 'size',
          type: 'string (possible values: "sm", "md", "lg")',
          description: 'Size of the select (adds the `is-size-{size}` class)'
        }, {
          name: 'className',
          type: 'string',
          description: 'Class to put on the outer `div` element'
        }, {
          name: 'inputClassName',
          type: 'string',
          description: 'Class to put on the inner `select` element'
        }, {
          name: 'arrowClassName',
          type: 'string',
          description: 'Class to put on the inner `div` containing the custom arrow icon'
        }, {
          name: 'children',
          type: 'node',
          description: 'Contents to put within the `select` element'
        }, {
          name: 'onChange',
          type: 'function',
          description: 'Callback called with the new selected value whenever selection changes'
        }, {
          name: '...props',
          description: 'All other props will be passed to the `select` element'
        }
      ],
      examples: (<div>
        <Example {...{title: 'Simple select'}}>
          <Select>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
          </Select>
        </Example>
        <Example {...{title: 'Select with an empty value'}}>
          <Select>
            <option value="">Choose one...</option>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
          </Select>
        </Example>
        <Example {...{title: 'Select with optgroups and disabled options'}}>
          <Select>
            <option value="">Choose one...</option>
            <optgroup label="Group A">
              <option value="1">Option One</option>
              <option value="2" disabled>Option Two</option>
              <option value="3">Option Three</option>
            </optgroup>
            <optgroup label="Group B">
              <option value="4">Option Four</option>
              <option value="5">Option Five</option>
              <option value="6" disabled>Option Six</option>
            </optgroup>
          </Select>
        </Example>
        <Example {...{title: 'Select sizes'}}>
          <div>
            <Select size="sm">
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
            </Select>
            <Select size="md" className="mt-1">
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
            </Select>
            <Select size="lg" className="mt-1">
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
            </Select>
          </div>
        </Example>
      </div>)
    }}/>
  );
}
