import React, { Fragment } from 'react';
import jsxToString from 'react-element-to-jsx-string';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism-okaidia.css';

export const Example = ({ title, description, children }) => {
  children = React.isValidElement(children) ? (
    children
  ) : (
    <Fragment>{children}</Fragment>
  );

  return (
    <div className="doc-example">
      <div className="doc-example-header">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      <div className="doc-example-rendered">{children}</div>
      <div className="doc-example-code">
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                jsxToString(children, {
                  maxInlineAttributesLineLength: 500,
                  filterProps: ['className', 'style'],
                  showFunctions: true,
                  functionValue: () => '/* function */',
                  showDefaultProps: false
                }),
                Prism.languages.jsx,
                'jsx'
              )
            }}
          />
        </pre>
      </div>
    </div>
  );
};
