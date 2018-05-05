import React from 'react';
import { Chip } from './chip';
import { DocPage, Example } from '../../../docs/components';
import Icon from '../icon/icon';

const ChipPage = () => {
  return (
    <DocPage component={Chip}>
      <Example {...{ title: 'Simple chip' }}>
        <Chip>A chip</Chip>
      </Example>
      <Example {...{ title: 'Chip with custom icon' }}>
        <Chip icon={<Icon name="check" />}>Chip with custom icon</Chip>
      </Example>
      <Example {...{ title: 'Chip without icon' }}>
        <Chip hideIcon>Chip with no icon</Chip>
      </Example>
      <Example {...{ title: 'Disabled chip' }}>
        <Chip disabled>Disabled chip</Chip>
      </Example>
      <Example {...{ title: 'Chip sizes' }}>
        <div>
          <Chip size="sm">Small chip</Chip>
          <Chip size="md" className="ml-1">
            Medium chip
          </Chip>
          <Chip size="lg" className="ml-1">
            Large chip
          </Chip>
        </div>
      </Example>
    </DocPage>
  );
};

export default ChipPage;
