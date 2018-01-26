import React from 'react';
import jsxToString from 'react-element-to-jsx-string';

const formatFunction = fn => {
  const fnName = fn.toString().split(/[ (]/)[1];
  return fnName ? `<${fnName} function>` : fn.toString();
};

export const Example = ({ title, description, children }) => {
  return (
    <div className="doc-example">
      <div className="doc-example-header">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      <div className="doc-example-rendered">{children}</div>
      <div className="doc-example-code">
        <pre>
          <code>
            {jsxToString(children, {
              maxInlineAttributesLineLength: 500,
              filterProps: ['className'],
              showFunctions: true,
              functionValue: formatFunction,
              showDefaultProps: false
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};
