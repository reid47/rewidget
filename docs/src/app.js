import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as components from '../../src';
import '../../src/main.css';
import './docs.css';

const pages = Object.keys(components).map(name => {
  const hyphenated = name
    .replace(/[A-Z]/g, '-$&')
    .toLowerCase()
    .substr(1);

  const component = components[name];

  return {
    metadata: component.metadata,
    component,
    componentName: name,
    linkPath: `/${hyphenated}`,
    page: require(`../../src/${hyphenated}/${hyphenated}.docs.js`).default
  };
});

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          {pages.map(({ linkPath, componentName }) => (
            <li key={linkPath}>
              <Link to={linkPath}>{componentName}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <div id="routes">
          {pages.map(({ linkPath, page }) => (
            <Route key={linkPath} exact path={linkPath} component={page} />
          ))}
        </div>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
