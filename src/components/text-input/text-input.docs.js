import React from 'react';
import { TextInput } from './text-input';
import { DocPage, Example } from '../../../docs/components';
import Icon from '../icon/icon';

export default function TextInputDocs() {
  return (
    <DocPage component={TextInput}>
      <Example {...{ title: 'Single-line text input' }}>
        <TextInput />
      </Example>
      <Example {...{ title: 'Single-line text input with icon' }}>
        <TextInput icon={<Icon name="search" />} />
      </Example>
      <Example {...{ title: 'Password input' }}>
        <TextInput password />
      </Example>
      <Example {...{ title: 'Text input with placeholder' }}>
        <TextInput placeholder="Enter something..." />
      </Example>
      <Example {...{ title: 'Single-line text input sizes' }}>
        <TextInput size="sm" />
        <TextInput size="md" className="mt-1" />
        <TextInput size="lg" className="mt-1" />
      </Example>
      <Example {...{ title: 'Single-line text input sizes with icons' }}>
        <TextInput size="sm" icon={<Icon name="search" />} />
        <TextInput size="md" icon={<Icon name="search" />} className="mt-1" />
        <TextInput size="lg" icon={<Icon name="search" />} className="mt-1" />
      </Example>
      <Example {...{ title: 'Multi-line text input' }}>
        <TextInput multiline />
      </Example>
      <Example {...{ title: 'Multi-line text input with icon' }}>
        <TextInput multiline icon={<Icon name="search" />} />
      </Example>
      <Example {...{ title: 'Multi-line text input sizes' }}>
        <TextInput multiline size="sm" />
        <TextInput multiline size="md" className="mt-1" />
        <TextInput multiline size="lg" className="mt-1" />
      </Example>
    </DocPage>
  );
}
