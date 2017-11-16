import React from 'react';
import Toggle from '../components/toggle/toggle';
import { Flex, Box } from '../components/flex';

class TogglePage extends React.Component {
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
        <Flex>
          <Box hAlign="left">
            <Toggle
              value={this.state.v1}
              onChange={newValue => this.setState({ v1: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              value={this.state.v2}
              animated={false}
              onChange={newValue => this.setState({ v2: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              rounded={false}
              value={this.state.v3}
              onChange={newValue => this.setState({ v3: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              size="tiny"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              size="small"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              size="normal"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              size="large"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              size="huge"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              showLabels
              size="tiny"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              showLabels
              size="small"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              showLabels
              size="normal"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              showLabels
              size="large"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              showLabels
              size="huge"
              value={this.state.v4}
              onChange={newValue => this.setState({ v4: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              rounded={false}
              showLabels
              size="tiny"
              value={this.state.v5}
              onChange={newValue => this.setState({ v5: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              rounded={false}
              showLabels
              size="small"
              value={this.state.v5}
              onChange={newValue => this.setState({ v5: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              rounded={false}
              showLabels
              size="normal"
              value={this.state.v5}
              onChange={newValue => this.setState({ v5: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              rounded={false}
              showLabels
              size="large"
              value={this.state.v5}
              onChange={newValue => this.setState({ v5: newValue })}
            />
          </Box>
        </Flex>
        <Flex>
          <Box hAlign="left">
            <Toggle
              rounded={false}
              showLabels
              size="huge"
              value={this.state.v5}
              onChange={newValue => this.setState({ v5: newValue })}
            />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default TogglePage;
