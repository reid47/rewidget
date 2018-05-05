import React from 'react';
import { Button } from './button';
import { DocPage, Example } from '../../../docs/components';
import Icon from '../icon/icon';

const ButtonPage = () => {
  return (
    <DocPage component={Button}>
      <Example {...{ title: 'Default buttons' }}>
        <Button primary>Click me</Button>
        <Button secondary className="ml-1">
          Click me
        </Button>
        <Button success className="ml-1">
          Click me
        </Button>
        <Button warning className="ml-1">
          Click me
        </Button>
        <Button alert className="ml-1">
          Click me
        </Button>
      </Example>
      <Example {...{ title: 'Alt buttons' }}>
        <Button alt primary>
          Click me
        </Button>
        <Button alt secondary className="ml-1">
          Click me
        </Button>
        <Button alt success className="ml-1">
          Click me
        </Button>
        <Button alt warning className="ml-1">
          Click me
        </Button>
        <Button alt alert className="ml-1">
          Click me
        </Button>
      </Example>
      <Example {...{ title: 'Plain buttons' }}>
        <Button plain primary>
          Click me
        </Button>
        <Button plain secondary className="ml-1">
          Click me
        </Button>
        <Button plain success className="ml-1">
          Click me
        </Button>
        <Button plain warning className="ml-1">
          Click me
        </Button>
        <Button plain alert className="ml-1">
          Click me
        </Button>
      </Example>
      <Example {...{ title: 'Buttons with icons' }}>
        <Button success icon={<Icon name="check" />}>
          Click me
        </Button>
        <Button warning icon={<Icon name="check" />} className="ml-1">
          Click me
        </Button>
        <Button alert alt icon={<Icon name="check" />} className="ml-1">
          Click me
        </Button>
        <Button success icon={<Icon name="check" />} className="ml-1" />
        <Button warning icon={<Icon name="check" />} className="ml-1" />
        <Button alert alt icon={<Icon name="check" />} className="ml-1" />
      </Example>
      <Example {...{ title: 'Button sizes' }}>
        <div>
          <Button size="sm">Click me</Button>
          <Button size="md" className="ml-1">
            Click me
          </Button>
          <Button size="lg" className="ml-1">
            Click me
          </Button>
        </div>
        <div className="mt-1">
          <Button alt size="sm">
            Click me
          </Button>
          <Button alt size="md" className="ml-1">
            Click me
          </Button>
          <Button alt size="lg" className="ml-1">
            Click me
          </Button>
        </div>
      </Example>
      <Example {...{ title: 'Button sizes with icons' }}>
        <Button success icon={<Icon name="check" />} size="sm">
          Click me
        </Button>
        <Button success icon={<Icon name="check" />} size="md" className="ml-1">
          Click me
        </Button>
        <Button success icon={<Icon name="check" />} size="lg" className="ml-1">
          Click me
        </Button>
      </Example>
      <Example {...{ title: 'Disabled buttons' }}>
        <Button disabled primary>
          Click me
        </Button>
        <Button plain disabled alert className="ml-1">
          Click me
        </Button>
        <Button alt disabled success className="ml-1">
          Click me
        </Button>
      </Example>
    </DocPage>
  );
};

export default ButtonPage;
