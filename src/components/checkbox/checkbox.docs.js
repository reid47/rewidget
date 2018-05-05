import React from 'react';
import { Checkbox } from './checkbox';
import { DocPage, Example } from '../../../docs/components';

const CheckboxPage = () => {
  return (
    <DocPage component={Checkbox}>
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
    </DocPage>
  );
};

export default CheckboxPage;
