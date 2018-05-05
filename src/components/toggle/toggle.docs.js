import React from 'react';
import { Toggle } from './toggle';
import { DocPage, Example } from '../../../docs/docs-components';

export default function TogglePage() {
  return (
    <DocPage component={Toggle}>
      <Example {...{ title: 'Simple toggle' }}>
        <Toggle defaultChecked />
      </Example>
      <Example {...{ title: 'Toggle with label contents' }}>
        <Toggle>I am a label within a toggle</Toggle>
      </Example>
      <Example {...{ title: 'Toggle sizes' }}>
        <div>
          <Toggle size="sm">I am a label within a toggle</Toggle>
          <Toggle size="md" className="mt-1">
            I am a label within a toggle
          </Toggle>
          <Toggle size="lg" className="mt-1">
            I am a label within a toggle
          </Toggle>
        </div>
      </Example>
      <Example {...{ title: 'Disabled toggle' }}>
        <div>
          <Toggle disabled className="mt-1">
            I cannot be checked
          </Toggle>
          <Toggle defaultChecked disabled className="mt-1">
            I cannot be unchecked
          </Toggle>
        </div>
      </Example>
    </DocPage>
  );
}
