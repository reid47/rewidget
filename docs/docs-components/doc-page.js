import React from 'react';
import Remarkable from 'remarkable';
const md = new Remarkable();

const stripInitialNewLines = text => {
  const lines = text.split(/\r\n|\n/);
  return lines.map(line => line.trim()).join('\n');
};

export const DocPage = ({
  componentName,
  componentMetadata,
  description,
  propList,
  examples
}) => {
  return (
    <div className="doc-page">
      <h1>{componentName}</h1>
      {description && (
        <div className="doc-page-description">
          <p
            dangerouslySetInnerHTML={{
              __html: md.render(stripInitialNewLines(description))
            }}
          />
        </div>
      )}
      <section>
        <h2 id="props">Props</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {componentMetadata &&
              Object.keys(componentMetadata.props)
                .sort()
                .map(propName => {
                  const {
                    description,
                    typeInfo: { type, required }
                  } = componentMetadata.props[propName];

                  return (
                    <tr key={propName}>
                      <td>{propName}</td>
                      <td>{type}</td>
                      <td>{required ? 'yes' : 'no'}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: description
                            ? md.render(description.lines.join('\n'))
                            : ''
                        }}
                      />
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </section>
      <section>
        <h2 id="examples">Examples</h2>
        {examples}
      </section>
    </div>
  );
};
