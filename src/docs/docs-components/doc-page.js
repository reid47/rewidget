import React from 'react';
import Remarkable from 'remarkable';
const md = new Remarkable();

const stripInitialNewLines = text => {
  const lines = text.split(/\r\n|\n/);
  return lines.map(line => line.trim()).join('\n');
};

const byPropName = (a, b) => {
  if (a.name.indexOf('...') === 0) return 1;
  if (b.name.indexOf('...') === 0) return -1;
  if (a.name === 'children') return 1;
  if (b.name === 'children') return -1;
  return a.name.localeCompare(b.name);
};

export const DocPage = ({ componentName, description, propList, examples }) => {
  return (
    <div className="doc-page">
      <h1>{componentName}</h1>
      {description && <div className="doc-page-description">
        <p dangerouslySetInnerHTML={{
          __html: md.render(stripInitialNewLines(description))
        }}/>
      </div>}
      <section>
        <h2 id="examples">Examples</h2>
        {examples}
      </section>
      <section>
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
              return (
                <tr key={prop.name}>
                  <td>{prop.name}</td>
                  <td>{prop.type}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: md.render(prop.description)
                    }}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
