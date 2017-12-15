import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';

export class Column extends React.Component {
  static propTypes = {

  };

  static defaultProps = {
    getHeader: () => null
  };

  render() {
    const { rowData, getCellContent } = this.props;
    if (!rowData) return <td/>;

    return <td>{getCellContent({rowData})}</td>;
  }
}

export class Table extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    showHeader: PropTypes.bool,
    // todo make sure children are columns
  };

  static defaultProps = {
    data: [],
    showHeader: false
  };

  renderHeader({columns}) {
    return React.Children.map(columns, (column, colKey) => {
      return <th key={colKey}>{column.props.getHeader()}</th>;
    });
  }

  renderRow() {

  }

  renderCell({column, rowData}) {
    return <td>{column.props.getCellContent({rowData})}</td>;
  }

  renderFooter({columns}) {
    return React.Children.map(columns, (column, colKey) => {
      return <th key={colKey}>{column.props.getHeader()}</th>;
    });
  }

  render() {
    const { 
      data, showHeader, showFooter, 
      renderHeader, renderFooter, renderRow, renderCell,
      children, ...props
    } = this.props;

    const columns = children;

    return (
      <table>
        {showHeader && (<thead>
          {renderHeader 
            ? renderHeader({columns})
            : this.renderHeader({columns})}
        </thead>)}
        <tbody>
        {data.map((rowData, rowKey) => (
          <tr key={rowKey}>
          {React.Children.map(children, (column, colKey) => (
            renderCell
              ? renderCell({column, rowData})
              // TODO: this isn't really working yet
              : this.renderCell({column, rowData})
          ))}
          </tr>
        ))}
        </tbody>
        {showFooter && (<tfoot>
          {renderFooter 
            ? renderFooter({columns})
            : this.renderFooter({columns})}
        </tfoot>)}
      </table>
    );
  }
}