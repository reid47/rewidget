import React from 'react';
import { TreeView } from '../components/treeview';
// import { Flex, Box } from '../components/flex';
import { withModifiers } from '../components/modifiers';
const Div = withModifiers('div');

const data = [
  {
    name: 'Test One',
    items: [
      { name: 'One Child A' },
      { name: 'One Child B' },
      { name: 'One Child C' }
    ]
  },
  {
    name: 'Test Two',
    items: [
    ]
  },
  {
    name: 'Test Three',
    items: [
      { name: 'Three Child A' },
      { name: 'Three Child B' },
      { name: 'Three Child C' },
      { name: 'Three Child D' },
      { name: 'Three Child E' },
      { name: 'Three Child F' },
    ]
  },
  {
    name: 'Test Four',
    items: [
      { name: 'Four Child A' }
    ]
  }
];

export default class TreeViewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      v1: false,
      v2: true,
      v3: false
    };
  }

  render() {
    return (
      <Div ma={3}>
        <Div><a href="#something">some link</a></Div>
        
        <TreeView {...{
          data,
          getItemText: item => item.name,
          getItemChildren: item => item.items
        }}/>
        
        <Div><a href="#something">some other link</a></Div>
      </Div>
    );
  }
}
