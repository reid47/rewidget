import React from 'react';
import { Toggle } from '../../components/toggle';

export class TogglePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      v1: false,
      v2: true,
      v3: false
    };
  }

  render() {
    return (
      <div style={{ margin: '1rem' }}>
        <Toggle
          value={this.state.v1}
          onChange={newValue => this.setState({ v1: newValue })}
        />
        <Toggle
          value={this.state.v2}
          animated={false}
          onChange={newValue => this.setState({ v2: newValue })}
        />
        <Toggle
          rounded={false}
          value={this.state.v3}
          onChange={newValue => this.setState({ v3: newValue })}
        />
        <Toggle
          size="tiny"
          value={this.state.v4}
          onChange={newValue => this.setState({ v4: newValue })}
        />
        <Toggle
          size="small"
          value={this.state.v4}
          onChange={newValue => this.setState({ v4: newValue })}
        />
        <Toggle
          size="normal"
          value={this.state.v4}
          onChange={newValue => this.setState({ v4: newValue })}
        />
        <Toggle
          size="large"
          value={this.state.v4}
          onChange={newValue => this.setState({ v4: newValue })}
        />
      </div>
    );
  }
}
