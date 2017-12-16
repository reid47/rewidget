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
  return <div className="doc-page">
    <h1>{componentName}</h1>
    <h2 id="examples">Examples</h2>
    {examples}
    <h2 id="props">Props</h2>
    <table className="props-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {propList.sort(byPropName).map(prop => {
          return <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td dangerouslySetInnerHTML={{
              __html: md.render(prop.description)
            }}/>
          </tr>;
        })}
      </tbody>
    </table>
  </div>;
}
