import React from 'react';
import { Button } from '../../components/button';
import { DocPage, Example } from '../../docs/docs-components';
import { CheckIcon } from '../../components/icons';

export const ButtonPage = () => {
  return (
    <DocPage
      {...{
        componentName: 'Button',
        propList: [
          {
            name: 'primary',
            type: 'boolean',
            description:
              'Indicates a primary button (adds the `is-primary` class)'
          },
          {
            name: 'secondary',
            type: 'boolean',
            description:
              'Indicates a secondary button (adds the `is-secondary` class)'
          },
          {
            name: 'success',
            type: 'boolean',
            description:
              'Indicates a success button (adds the `is-success` class)'
          },
          {
            name: 'alert',
            type: 'boolean',
            description: 'Indicates a alert button (adds the `is-alert` class)'
          },
          {
            name: 'warning',
            type: 'boolean',
            description:
              'Indicates a warning button (adds the `is-warning` class)'
          },
          {
            name: 'alt',
            type: 'boolean',
            description: 'Indicates an alt button (adds the `is-alt` class)'
          },
          {
            name: 'plain',
            type: 'boolean',
            description: 'Indicates a plain button (adds the `is-plain` class)'
          },
          {
            name: 'size',
            type: 'string (possible values: "sm", "md", "lg")',
            description: 'Size of the button (adds the `is-size-{size}` class)'
          },
          {
            name: 'icon',
            type: 'node',
            description: 'Icon to place inside the button'
          },
          {
            name: 'iconClassName',
            type: 'string',
            description:
              'Class name to add to the element surrounding the icon (if given)'
          },
          {
            name: 'contentClassName',
            type: 'string',
            description:
              'Class name to add to the element surrounding both the text and the icon (if given)'
          },
          {
            name: 'textClassName',
            type: 'string',
            description:
              'Class name to add to the element surrounding both the inner text'
          },
          {
            name: '...props',
            description:
              'All additional props are placed on the inner `button` element'
          }
        ],
        examples: (
          <div>
            <Example {...{ title: 'Default buttons' }}>
              <div>
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
              </div>
            </Example>
            <Example {...{ title: 'Alt buttons' }}>
              <div>
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
              </div>
            </Example>
            <Example {...{ title: 'Plain buttons' }}>
              <div>
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
              </div>
            </Example>
            <Example {...{ title: 'Buttons with icons' }}>
              <div>
                <Button success icon={<CheckIcon />}>
                  Click me
                </Button>
                <Button warning icon={<CheckIcon />} className="ml-1">
                  Click me
                </Button>
                <Button alert alt icon={<CheckIcon />} className="ml-1">
                  Click me
                </Button>
                <Button success icon={<CheckIcon />} className="ml-1" />
                <Button warning icon={<CheckIcon />} className="ml-1" />
                <Button alert alt icon={<CheckIcon />} className="ml-1" />
              </div>
            </Example>
            <Example {...{ title: 'Button sizes' }}>
              <div>
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
              </div>
            </Example>
            <Example {...{ title: 'Button sizes with icons' }}>
              <div>
                <Button success icon={<CheckIcon />} size="sm">
                  Click me
                </Button>
                <Button success icon={<CheckIcon />} size="md" className="ml-1">
                  Click me
                </Button>
                <Button success icon={<CheckIcon />} size="lg" className="ml-1">
                  Click me
                </Button>
              </div>
            </Example>
            <Example {...{ title: 'Disabled buttons' }}>
              <div>
                <Button disabled primary>
                  Click me
                </Button>
                <Button plain disabled alert className="ml-1">
                  Click me
                </Button>
                <Button alt disabled success className="ml-1">
                  Click me
                </Button>
              </div>
            </Example>
          </div>
        )
      }}
    />
  );
};
