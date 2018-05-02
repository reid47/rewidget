import React, { Fragment } from 'react';
import { Pagination } from './pagination';
import { DocPage, Example } from '../../../docs/docs-components';

class PaginationPage extends React.Component {
  state = {
    ex1: 8,
    ex2: 12,
    ex3: 1
  };

  render() {
    return (
      <DocPage
        {...{
          componentName: 'Pagination',
          componentMetadata: Pagination.metadata,
          examples: (
            <Fragment>
              <Example {...{ title: 'Pagination with 8 total pages' }}>
                <Pagination
                  totalPages={8}
                  currentPage={this.state.ex1}
                  onPageChange={ex1 => this.setState({ ex1 })}
                />
              </Example>
              <Example {...{ title: 'Pagination with 24 total pages' }}>
                <Pagination
                  totalPages={24}
                  currentPage={this.state.ex2}
                  onPageChange={ex2 => this.setState({ ex2 })}
                />
              </Example>
              <Example
                {...{ title: 'Pagination without previous/next buttons' }}>
                <Pagination
                  totalPages={8}
                  currentPage={this.state.ex3}
                  onPageChange={ex3 => this.setState({ ex3 })}
                  hidePrevNext
                />
              </Example>
            </Fragment>
          )
        }}
      />
    );
  }
}

export default PaginationPage;
