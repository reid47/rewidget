import React from 'react';
import { Table, Column } from '../components/table';
// import { Flex, Box } from '../components/flex';
import { withModifiers } from '../components/modifiers';
const Div = withModifiers('div');

const data = [
  {
    name: 'Test One',
    cost: 47.00,
    required: true
  }, {
    name: 'Test Two',
    cost: 12.23,
    required: false
  }, {
    name: 'Test Three',
    cost: 78.90,
    required: true
  }, {
    name: 'Test Four',
    cost: 1028,
    required: true
  }, {
    name: 'Test Five',
    cost: 199.99,
    required: false
  }
];

export default class TablePage extends React.Component {
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
        
        <Table {...{
          data,
          showHeader: true,
          showFooter: true
        }}>
          <Column {...{
            getHeader: () => 'Name',
            getCellContent: ({rowData}) => rowData.name
          }}/>
          <Column {...{
            getHeader: () => 'Cost',
            getCellContent: ({rowData}) => `$${rowData.cost}`
          }}/>
        </Table>
        
        <hr/>

        <Table {...{
          data,
          showHeader: true,
          renderHeader: () => 'custom header',
          showFooter: true,
          renderFooter: () => 'custom footer'
        }}>
          <Column {...{
            getHeader: () => 'Name',
            getCellContent: ({rowData}) => rowData.name
          }}/>
          <Column {...{
            getHeader: () => 'Cost',
            getCellContent: ({rowData}) => `$${rowData.cost}`
          }}/>
        </Table>
        <Div><a href="#something">some other link</a></Div>
      </Div>
    );
  }
}
