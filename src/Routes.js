import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Grid, Cell } from './components/grid/grid';
import { Flex, Box } from './components/flex';
import { List, Item } from './components/list';

import App from './App';
import ButtonPage from './pages/button-page';
import CheckboxPage from './pages/checkbox-page';
import ColorPickerPage from './pages/colorpicker-page';
import TogglePage from './pages/toggle-page';
import ListViewPage from './pages/list-view-page';
import ProgressPage from './pages/progress-page';
import TextBoxPage from './pages/textbox-page';
import TooltipPage from './pages/tooltip-page';
import FlexPage from './pages/flex-page';
import GridPage from './pages/grid-page';
import PlaceholderPage from './pages/placeholder-page';

const pages = [
  {
    path: '/',
    component: App,
    linkText: 'home'
  },
  {
    path: '/button',
    component: ButtonPage,
    linkText: 'button'
  },
  {
    path: '/checkbox',
    component: CheckboxPage,
    linkText: 'checkbox'
  },
  {
    path: '/colorpicker',
    component: ColorPickerPage,
    linkText: 'colorpicker'
  },
  {
    path: '/flex',
    component: FlexPage,
    linkText: 'flex'
  },
  {
    path: '/grid',
    component: GridPage,
    linkText: 'grid'
  },
  {
    path: '/listview',
    component: ListViewPage,
    linkText: 'list view'
  },
  {
    path: '/textbox',
    component: TextBoxPage,
    linkText: 'textbox'
  },
  {
    path: '/toggle',
    component: TogglePage,
    linkText: 'toggle'
  },
  {
    path: '/tooltip',
    component: TooltipPage,
    linkText: 'tooltip'
  },
  {
    path: '/placeholder',
    component: PlaceholderPage,
    linkText: 'placeholder'
  },
  {
    path: '/progress',
    component: ProgressPage,
    linkText: 'progress'
  }
];

const Routes = props => (
  <BrowserRouter>
    <Grid
      {...{
        gap: 'zero',
        template: {
          cols: ['auto', '1fr'],
          rows: ['100vh'],
          areas: ['sidebar main'],
          breakpoints: {
            '(max-width: 600px)': {
              cols: ['100vw'],
              rows: ['3rem', 'calc(100vh - 3rem)'],
              areas: ['sidebar', 'main']
            }
          }
        }
      }}>
      <Cell area="sidebar" is={Flex} scroll="none" bgColor="secondary" textColor="light">
        <Box vAlign="top" hAlign="left">
          <List>
            {pages.map((page, key) => <Item key={key} pa>
              <Link to={page.path}>{page.linkText}</Link>
              </Item>)}
          </List>
        </Box>
      </Cell>
      <Cell area="main" is="main" scroll="y">
        <div id="routes">
          {pages.map((page, key) => 
            <Route key={key} exact path={page.path} component={page.component} />)}
        </div>
      </Cell>
    </Grid>
  </BrowserRouter>
);

export default Routes;
