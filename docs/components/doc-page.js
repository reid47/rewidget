import React from 'react';
import Remarkable from 'remarkable';
const md = new Remarkable();

const stripInitialNewLines = text => {
  const lines = text.split(/\r\n|\n/);
  return lines.map(line => line.trim()).join('\n');
};

const typeInfoToString = typeInfo => {
  const { type } = typeInfo;
  switch (type) {
    case 'oneOf':
      return `one of the following values: \n${typeInfo.possibleValues
        .map(v => '- `' + v)
        .join('`\n')}\``;

    case 'oneOfType':
      return `one of the following types: \n${typeInfo.possibleTypes
        .map(v => '- `' + typeInfoToString(v))
        .join('`\n')}\``;

    default:
      return '`' + type + '`';
  }
};

export const DocPage = ({ component, description, children }) => {
  return (
    <div className="doc-page">
      <h1 className="doc-page-component-name">
        {component.displayName || component.name}
      </h1>
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
        <h2 id="examples">Examples</h2>
        {children}
      </section>
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
            {component.metadata &&
              Object.keys(component.metadata.props)
                .sort()
                .map(propName => {
                  const prop = component.metadata.props[propName];
                  const { description, typeInfo } = prop;

                  return (
                    <tr key={propName}>
                      <td>{propName}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: md.render(typeInfoToString(typeInfo))
                        }}
                      />
                      <td>{typeInfo.required ? 'yes' : 'no'}</td>
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
    </div>
  );
};
