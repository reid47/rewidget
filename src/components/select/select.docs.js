import React from 'react';
import { Select } from './select';
import { DocPage, Example } from '../../../docs/components';

export default function SelectPage() {
  return (
    <DocPage component={Select}>
      <Example {...{ title: 'Simple select' }}>
        <Select>
          <option value="1">Option One</option>
          <option value="2">Option Two</option>
          <option value="3">Option Three</option>
        </Select>
      </Example>
      <Example {...{ title: 'Select with an empty value' }}>
        <Select>
          <option value="">Choose one...</option>
          <option value="1">Option One</option>
          <option value="2">Option Two</option>
          <option value="3">Option Three</option>
        </Select>
      </Example>
      <Example {...{ title: 'Select with optgroups and disabled options' }}>
        <Select>
          <option value="">Choose one...</option>
          <optgroup label="Group A">
            <option value="1">Option One</option>
            <option value="2" disabled>
              Option Two
            </option>
            <option value="3">Option Three</option>
          </optgroup>
          <optgroup label="Group B">
            <option value="4">Option Four</option>
            <option value="5">Option Five</option>
            <option value="6" disabled>
              Option Six
            </option>
          </optgroup>
        </Select>
      </Example>
      <Example {...{ title: 'Select sizes' }}>
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
    </DocPage>
  );
}
