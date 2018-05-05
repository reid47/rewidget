import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import * as components from '../../src';
import './docs.css';

const pages = Object.keys(components)
  .map(name => {
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
      page: require(`../../src/components/${hyphenated}/${hyphenated}.docs.js`)
        .default
    };
  })
  .filter(Boolean);

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="left-nav">
            <h3 className="left-nav-section-header">components</h3>
            <ul>
              {pages.map(({ linkPath, componentName }) => (
                <li key={linkPath}>
                  <NavLink
                    to={linkPath}
                    className="component-link"
                    activeClassName="active">
                    {componentName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <main>
            <div className="main-content" id="routes">
              {pages.map(({ linkPath, page }) => (
                <Route key={linkPath} exact path={linkPath} component={page} />
              ))}
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
