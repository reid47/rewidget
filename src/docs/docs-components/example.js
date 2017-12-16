import React from 'react';
import jsxToString from 'react-element-to-jsx-string';

export const Example = ({
  title,
  description,
  children
}) => {
  return <div>
    <h4>{title}</h4>
    {children}
    <pre><code>{jsxToString(children, {
      maxInlineAttributesLineLength: 100
    })}</code></pre>
  </div>;
}
