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
        <Example {...{title: 'Default buttons'}}>
          <div>
            <Button primary>Click me</Button>
            <Button secondary className="ml-1">Click me</Button>
            <Button success className="ml-1">Click me</Button>
            <Button warning className="ml-1">Click me</Button>
            <Button alert className="ml-1">Click me</Button>
          </div>
        </Example>
        <Example {...{title: 'Alt buttons'}}>
          <div>
            <Button alt primary>Click me</Button>
            <Button alt secondary className="ml-1">Click me</Button>
            <Button alt success className="ml-1">Click me</Button>
            <Button alt warning className="ml-1">Click me</Button>
            <Button alt alert className="ml-1">Click me</Button>
          </div>
        </Example>
        <Example {...{title: 'Plain buttons'}}>
          <div>
            <Button plain primary>Click me</Button>
            <Button plain secondary className="ml-1">Click me</Button>
            <Button plain success className="ml-1">Click me</Button>
            <Button plain warning className="ml-1">Click me</Button>
            <Button plain alert className="ml-1">Click me</Button>
          </div>
        </Example>
        <Example {...{title: 'Button sizes'}}>
          <div>
            <div>
              <Button size="sm">Click me</Button>
              <Button size="md" className="ml-1">Click me</Button>
              <Button size="lg" className="ml-1">Click me</Button>
            </div>
            <div className="mt-1">
              <Button alt size="sm">Click me</Button>
              <Button alt size="md" className="ml-1">Click me</Button>
              <Button alt size="lg" className="ml-1">Click me</Button>
            </div>
          </div>
        </Example>
      </div>)
    }}/>
  );
};
