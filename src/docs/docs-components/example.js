import React from 'react';
import jsxToString from 'react-element-to-jsx-string';

const formatFunction = fn => {
  const fnName = fn.toString().split(/[ (]/)[1];
  return fnName ? `<${fnName} function>` : fn.toString();
};

export const Example = ({
  title,
  description,
  children
}) => {
  return <div className="doc-example">
    <h4>{title}</h4>
    <div className="doc-example-rendered">
      {children}
    </div>
    <div className="doc-example-code">
      <pre><code>{jsxToString(children, {
        maxInlineAttributesLineLength: 100,
        filterProps: ['className'],
        showFunctions: true,
        functionValue: formatFunction
      })}</code></pre>
    </div>
  </div>;
}
