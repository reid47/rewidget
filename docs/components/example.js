import React, { Fragment, PureComponent } from 'react';
import jsxToString from 'react-element-to-jsx-string';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism-okaidia.css';

export default class Example extends PureComponent {
  state = { showCode: false };

  render() {
    const { title, description, children } = this.props;
    const { showCode } = this.state;

    const renderedChildren = React.isValidElement(children) ? (
      children
    ) : (
      <Fragment>{children}</Fragment>
    );

    return (
      <div className="doc-example">
        <div className="doc-example-header">
          <div>
            <h4>{title}</h4>
            <button
              type="button"
              className="doc-example-toggle-code"
              onClick={() => this.setState({ showCode: !showCode })}>
              {showCode ? 'hide' : 'show'} code
            </button>
          </div>
          <span>{description}</span>
        </div>
        <div className="doc-example-rendered">{children}</div>
        {showCode && (
          <div className="doc-example-code">
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    jsxToString(renderedChildren, {
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
        )}
      </div>
    );
  }
}
