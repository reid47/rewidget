import React from 'react';
import { Button } from '../../components/button';
import { DocPage, Example } from '../../docs/docs-components';

export const ButtonPage = () => {
  return (
    <DocPage {...{
      componentName: 'Button',
      propList: [
        {
          name: 'primary',
          type: 'bool',
          description: 'Indicates a primary button (adds the `is-primary` class)'
        }, {
          name: 'secondary',
          type: 'bool',
          description: 'Indicates a secondary button (adds the `is-secondary` class)'
        }, {
          name: 'success',
          type: 'bool',
          description: 'Indicates a success button (adds the `is-success` class)'
        }, {
          name: 'alert',
          type: 'bool',
          description: 'Indicates a alert button (adds the `is-alert` class)'
        }, {
          name: 'warning',
          type: 'bool',
          description: 'Indicates a warning button (adds the `is-warning` class)'
        }, {
          name: 'alt',
          type: 'bool',
          description: 'Indicates an alt button (adds the `is-alt` class)'
        }, {
          name: 'plain',
          type: 'bool',
          description: 'Indicates a plain button (adds the `is-plain` class)'
        }, {
          name: 'size',
          type: 'string (possible values: "sm", "md", "lg")',
          description: 'Size of the button (adds the `is-size-{size}` class)'
        }, {
          name: '...props',
          description: 'All additional props are placed on the inner `button` element'
        }
      ],
      examples: (<div>
        <Example {...{title: 'Primary button'}}>
          <Button primary>Click me</Button>
        </Example>
        <Example {...{title: 'Secondary button'}}>
          <Button secondary>Click me</Button>
        </Example>
        <Example {...{title: 'Success button'}}>
          <Button success>Click me</Button>
        </Example>
        <Example {...{title: 'Warning button'}}>
          <Button warning>Click me</Button>
        </Example>
        <Example {...{title: 'Alert button'}}>
          <Button alert>Click me</Button>
        </Example>
        <Example {...{title: 'Primary alt button'}}>
          <Button primary alt>Click me</Button>
        </Example>
        <Example {...{title: 'Secondary alt button'}}>
          <Button secondary alt>Click me</Button>
        </Example>
        <Example {...{title: 'Success alt button'}}>
          <Button success alt>Click me</Button>
        </Example>
        <Example {...{title: 'Warning alt button'}}>
          <Button warning alt>Click me</Button>
        </Example>
        <Example {...{title: 'Alert alt button'}}>
          <Button alert alt>Click me</Button>
        </Example>
        <Example {...{title: 'Primary plain button'}}>
          <Button primary plain>Click me</Button>
        </Example>
        <Example {...{title: 'Secondary plain button'}}>
          <Button secondary plain>Click me</Button>
        </Example>
        <Example {...{title: 'Success plain button'}}>
          <Button success plain>Click me</Button>
        </Example>
        <Example {...{title: 'Warning plain button'}}>
          <Button warning plain>Click me</Button>
        </Example>
        <Example {...{title: 'Alert plain button'}}>
          <Button alert plain>Click me</Button>
        </Example>
        <Example {...{title: 'Button sizes'}}>
          <div>
            <div>
              <Button size="sm">Click me</Button>
              <Button size="md">Click me</Button>
              <Button size="lg">Click me</Button>
            </div>
            <div>
              <Button alt size="sm">Click me</Button>
              <Button alt size="md">Click me</Button>
              <Button alt size="lg">Click me</Button>
            </div>
          </div>
        </Example>
      </div>)
    }}/>
  );
};
