import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ButtonPage } from './pages/button-page';
import { CheckboxPage } from './pages/checkbox-page';
import { TextboxPage } from './pages/textbox-page';
import { TogglePage } from './pages/toggle-page';
import { RadioPage } from './pages/radio-page';
import { RadioGroupPage } from './pages/radio-group-page';
import { SelectPage } from './pages/select-page';
import '../components/main.css';

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
    path: '/select',
    component: SelectPage,
    linkText: 'select'
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
