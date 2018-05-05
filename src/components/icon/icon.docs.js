import React, { Component } from 'react';
import Icon from './icon';
import svgs from './svgs';
import { DocPage, Example } from '../../../docs/components';

export default class IconDocs extends Component {
  render() {
    return (
      <DocPage component={Icon}>
        <Example title="All icons">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
            {Object.keys(svgs).map(name => (
              <div
                key={name}
                style={{
                  padding: '16px',
                  width: '160px',
                  textAlign: 'center',
                  fontFamily: 'monospace'
                }}>
                <Icon name={name} width="48" height="48" />
                <div>{name}</div>
              </div>
            ))}
          </div>
        </Example>
        <Example title="Icon sizing">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
            <Icon name="x" width="12" height="12" />
            <Icon name="x" />
            <Icon name="x" width="36" height="36" />
            <Icon name="x" width="48" height="48" />
          </div>
        </Example>
        <Example title="Icon with custom class name">
          <Icon name="x" className="color-blue" />
        </Example>
      </DocPage>
    );
  }
}
