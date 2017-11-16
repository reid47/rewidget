import React from 'react';
import {Grid, Cell} from '../components/grid/grid';
import {Placeholder} from '../components/placeholder/placeholder';

export default class GridPage extends React.Component {
  render() {
    return (
      <div>
        <Grid {...{
          template: {
            areas: ['header', 'nav', 'content', 'sidebar', 'ad', 'footer'],
            breakpoints: {
              '(min-width: 500px)': {
                cols: ['1fr', '3fr'],
                areas: [
                  'header header',
                  'nav nav',
                  'sidebar content',
                  'ad footer'
                ]
              },
              '(max-width: 700px)': {
                cols: ['1fr', '4fr', '1fr'],
                areas: [
                  'header header  header',
                  'nav    content sidebar',
                  'nav    content ad',
                  'footer footer  footer'
                ]
              }
            }
          }
        }}>
          <Cell area="header">header</Cell>
          <Cell area="nav">nav</Cell>
          <Cell area="content">content</Cell>
          <Cell area="sidebar">sidebar</Cell>
          <Cell area="ad">ad</Cell>
          <Cell area="footer">footer</Cell>
        </Grid>
        <br/><br/><hr/><br/><br/>
        <Grid>
          <Cell>A</Cell>
          <Cell col={2}>B</Cell>
          <Cell row={2}>C</Cell>
          <Cell row={2} col={2}>D</Cell>
        </Grid>
        <br/><br/><hr/><br/><br/>
        <Grid>
          <Cell><Placeholder invert lines={4}/></Cell>
          <Cell col={2}><Placeholder invert lines={4}/></Cell>
          <Cell row={2}><Placeholder invert lines={4}/></Cell>
          <Cell row={2} col={2}><Placeholder invert lines={4}/></Cell>
        </Grid>
        <br/><br/><hr/><br/><br/>
        <Grid {...{
          template: {
            cols: ['1fr', '2fr', 'auto'],
            rows: ['100px', 'auto', '200px'],
          }
        }}>
          <Cell row={1} col={1}>A</Cell>
          <Cell row={1} col={2}>B</Cell>
          <Cell row={3} col={1}>C</Cell>
          <Cell row={3} col={2}>D</Cell>
          <Cell row={1} col={3}>auto</Cell>
          <Cell row={2} col={'1 / span 3'}>span</Cell>
        </Grid>
        <br/><br/><hr/><br/><br/>
        <Grid>
          <Cell col={1}>A</Cell>
          <Cell col={2}>B</Cell>
          <Cell row={2} col={1}>C</Cell>
          <Cell row={2} col={2}>D</Cell>
        </Grid>
        <br/><br/><hr/><hr/><hr/><br/><br/>
        <div className="grid">
          <div className="grid-cell">A</div>
          <div className="grid-cell in-row-2">B</div>
          <div className="grid-cell in-col-2">C</div>
          <div className="grid-cell in-row-2 in-col-2">D</div>
        </div>
        <br/><br/><hr/><br/><br/>
        <div className="grid has-gap-tiny" style={{
          gridTemplateColumns: '1fr auto'
        }}>
          <div className="grid-cell">A</div>
          <div className="grid-cell in-row-2">B</div>
          <div className="grid-cell in-col-2">C</div>
          <div className="grid-cell in-row-2 in-col-2">D</div>
        </div>
        <br/><br/><hr/><br/><br/>
        <div className="grid has-gap-tiny">
          <div className="grid-cell">A</div>
          <div className="grid-cell in-row-2">B</div>
          <div className="grid-cell in-col-2">C</div>
          <div className="grid-cell in-row-2 in-col-2">D</div>
        </div>
        <br/><br/><hr/><br/><br/>
        <div className="grid">
          <div className="grid-cell">A</div>
          <div className="grid-cell in-row-2">B</div>
          <div className="grid-cell in-row-2 in-col-2">D</div>
        </div>
        <br/><br/><hr/><br/><br/>
        <div className="grid">
          <div className="grid-cell">A</div>
          <div className="grid-cell in-col-12">B</div>
          <div className="grid-cell in-row-2 span-cols-12">D</div>
        </div>
        <br/><br/><hr/><br/><br/>
        <div className="grid">
          <div className="grid-cell span-cols-2">A</div>
          <div className="grid-cell in-col-3 span-rows-2">B</div>
          <div className="grid-cell in-row-2">C</div>
          <div className="grid-cell in-row-2 in-col-2">D</div>
        </div>
      </div>
    );
  }
}
