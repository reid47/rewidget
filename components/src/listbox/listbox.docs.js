import React from 'react';
import { Listbox } from '../../components/listbox';
import { DocPage, Example } from '../../docs/docs-components';

export class ListboxPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocPage
        {...{
          componentName: 'Listbox',
          description: `
            coming soon...
          `,
          propList: [],
          examples: (
            <div>
              <Example {...{ title: 'Simple listbox' }}>
                <Listbox items={['One', 'Two', 'Three']}/>
              </Example>
            </div>
          )
        }}
      />
    );
  }
}
