import React, { Component } from 'react';
import Icon from './icon';
import svgs from './svgs';
import { DocPage, Example } from '../../../docs/components';

export default class IconDocs extends Component {
  render() {
    return (
      <DocPage component={Icon}>
        {Object.keys(svgs).map(name => (
          <Example key={name} title={`${name} icon`}>
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
      </DocPage>
    );
  }
}
