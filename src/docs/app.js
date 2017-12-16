import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ButtonPage } from '../components/button/button.docs';
import { CheckboxPage } from '../components/checkbox/checkbox.docs';
import { TextInputPage } from '../components/text-input/text-input.docs';
import { TogglePage } from '../components/toggle/toggle.docs';
import { RadioPage } from '../components/radio/radio.docs';
import { RadioGroupPage } from '../components/radio-group/radio-group.docs';
import { SelectPage } from '../components/select/select.docs';
import '../components/main.css';
import './docs.css';

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
    path: '/text-input',
    component: TextInputPage,
    linkText: 'text input'
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
