import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
  ButtonPage,
  CheckboxPage,
  RadioPage,
  RadioGroupPage,
  TextboxPage,
  TogglePage
} from './pages';

const pages = [
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
    path: '/radio',
    component: RadioPage,
    linkText: 'radio'
  },
  {
    path: '/radio-group',
    component: RadioGroupPage,
    linkText: 'radio group'
  },
  {
    path: '/textbox',
    component: TextboxPage,
    linkText: 'textbox'
  },
  {
    path: '/toggle',
    component: TogglePage,
    linkText: 'toggle'
  }
];

const App = props => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          {pages.map((page, key) => <li key={key}>
            <Link to={page.path}>{page.linkText}</Link>
          </li>)}
        </ul>
      </nav>
      <main>
        <div id="routes">
          {pages.map((page, key) =>
            <Route key={key} exact path={page.path} component={page.component} />)}
        </div>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
