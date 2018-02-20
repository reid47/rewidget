import React from 'react';
import * as components from '../../src';

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

console.log({ pages });

const App = () => {
  return <h1>helo!</h1>;
};

export default App;
