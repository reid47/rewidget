import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as components from '../../src';
import { Modal, Button, MenuIcon } from '../../src';
import '../../src/main.css';
import './docs.css';

const pages = Object.keys(components)
  .map(name => {
    if (name.indexOf('Icon') > -1) return null;

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

class App extends React.Component {
  state = { navOpen: false };

  render() {
    const { navOpen } = this.state;

    return (
      <BrowserRouter>
        <div>
          <Modal
            type="flyout-left"
            open={navOpen}
            onClose={() => this.setState({ navOpen: false })}>
            <nav>
              <ul>
                {pages.map(({ linkPath, componentName }) => (
                  <li key={linkPath}>
                    <Link
                      to={linkPath}
                      onClick={() => this.setState({ navOpen: false })}>
                      {componentName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Modal>

          <header className="app-header">
            <Button
              secondary
              plain
              icon={<MenuIcon />}
              onClick={() => this.setState({ navOpen: true })}
            />
            <h1>rewidget</h1>
          </header>

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
  }
}

export default App;
