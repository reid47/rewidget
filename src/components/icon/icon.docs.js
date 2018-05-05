import React, { Fragment } from 'react';
import Icon from './icon';
import svgs from './svgs';
import { DocPage, Example } from '../../../docs/docs-components';

export default class IconDocs extends React.Component {
  render() {
    return (
      <DocPage
        {...{
          componentName: 'Icon',
          componentMetadata: Icon.metadata,
          examples: (
            <Fragment>
              {Object.keys(svgs).map(name => (
                <Example key={name} title={name}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around'
                    }}>
                    <Icon name={name} width="12" height="12" />
                    <Icon name={name} />
                    <Icon name={name} width="48" height="48" />
                  </div>
                </Example>
              ))}
            </Fragment>
          )
        }}
      />
    );
  }
}
