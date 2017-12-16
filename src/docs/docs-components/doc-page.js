import React from 'react';
import Remarkable from 'remarkable';
const md = new Remarkable();

const byPropName = (a, b) => {
  if (a.name.indexOf('...') === 0) return 1;
  if (b.name.indexOf('...') === 0) return -1;
  if (a.name === 'children') return 1;
  if (b.name === 'children') return -1;
  return a.name.localeCompare(b.name);
}

export const DocPage = ({
  componentName,
  propList,
  examples
}) => {
  return <div>
    <h1>{componentName}</h1>
    <h2>Props</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {propList.sort(byPropName).map(prop => {
          return <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.defaultValue}</td>
            <td dangerouslySetInnerHTML={{
              __html: md.render(prop.description)
            }}/>
          </tr>;
        })}
      </tbody>
    </table>
    <h2>Examples</h2>
    {examples}
  </div>;
}
