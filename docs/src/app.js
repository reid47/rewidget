import fs from 'fs';
import path from 'path';
import React from 'react';
// import reactDocGen from 'react-docgen';
import * as components from '../../src';
var reactDocGen = require('react-docgen');

const pages = Object.keys(components).map(name => {
  const hyphenated = name
    .replace(/[A-Z]/g, '-$&')
    .toLowerCase()
    .substr(1);

  const component = components[name];
  const source = require(`!!raw-loader!../../src/${hyphenated}/${
    hyphenated
  }.js`);
  console.log({ source });
  const info = reactDocGen.parse(source);
  console.log({ info });
  return {
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
