import React from 'react';
import { Radio } from './radio';
import { DocPage, Example } from '../../../docs/components';

export default function RadioDocs() {
  return (
    <DocPage component={Radio}>
      <Example {...{ title: 'Simple radio' }}>
        <Radio defaultChecked />
      </Example>
      <Example {...{ title: 'Radio with label contents' }}>
        <Radio>I am a label within a radio</Radio>
      </Example>
      <Example {...{ title: 'Radio sizes' }}>
        <Radio size="sm" name="ex3">
          I am a label within a radio
        </Radio>
        <Radio size="md" name="ex3" className="mt-1">
          I am a label within a radio
        </Radio>
        <Radio size="lg" name="ex3" className="mt-1">
          I am a label within a radio
        </Radio>
      </Example>
      <Example {...{ title: 'Disabled radio' }}>
        <Radio disabled className="mt-1">
          I cannot be checked
        </Radio>
        <Radio defaultChecked disabled className="mt-1">
          I cannot be unchecked
        </Radio>
      </Example>
    </DocPage>
  );
}
