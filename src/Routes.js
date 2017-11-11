import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import ButtonPage from './pages/ButtonPage';
import CheckboxPage from './pages/CheckboxPage';
import ListViewPage from './pages/ListViewPage';
import ProgressPage from './pages/ProgressPage';
import TextInputPage from './pages/TextInputPage';
import FlexPage from './pages/flex-page';

const Routes = (props) => (
  <BrowserRouter>
    <div id="routes">
    {/* use Switch here? */}
      <Route exact path="/" component={App} />
      <Route exact path="/button" component={ButtonPage} />
      <Route exact path="/checkbox" component={CheckboxPage} />
      <Route exact path="/listview" component={ListViewPage} />
      <Route exact path="/progress" component={ProgressPage} />
      <Route exact path="/textinput" component={TextInputPage} />
      <Route exact path="/flex" component={FlexPage} />
    </div>
  </BrowserRouter>
);

export default Routes;
