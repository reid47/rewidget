import React from 'react';
import { Listbox } from './listbox';
import { DocPage, Example } from '../../docs/docs-components';

class ListboxPage extends React.Component {
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
                <Listbox items={['One', 'Two', 'Three']} />
              </Example>
            </div>
          )
        }}
      />
    );
  }
}

export default ListboxPage;
