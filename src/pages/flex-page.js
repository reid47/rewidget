import React from 'react';
import { Flex, Box } from '../components/flex';
import Button from '../components/button/button';
import ButtonGroup from '../components/button/button-group';

class FlexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spacing: 'default'
    };
  }

  render() {
    return (
      <div style={{ margin: '1rem', fontFamily: 'monospace' }}>
        <div style={{ marginBottom: '1rem' }}>
          <div>Spacing:</div>
          <ButtonGroup>
            <Button
              alt={this.state.spacing === 'none'}
              onClick={() => this.setState({ spacing: 'none' })}>
              none
            </Button>
            <Button
              alt={this.state.spacing === 'tiny'}
              onClick={() => this.setState({ spacing: 'tiny' })}>
              tiny
            </Button>
            <Button
              alt={this.state.spacing === 'small'}
              onClick={() => this.setState({ spacing: 'small' })}>
              small
            </Button>
            <Button
              alt={this.state.spacing === 'default'}
              onClick={() => this.setState({ spacing: 'default' })}>
              default
            </Button>
            <Button
              alt={this.state.spacing === 'large'}
              onClick={() => this.setState({ spacing: 'large' })}>
              large
            </Button>
            <Button
              alt={this.state.spacing === 'huge'}
              onClick={() => this.setState({ spacing: 'huge' })}>
              huge
            </Button>
          </ButtonGroup>
        </div>

        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>A</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>A</Box>
          <Box>B</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
        </Flex>
        <Flex spacing={this.state.spacing} reverse style={{ height: '200px' }}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
          <Box>D</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
          <Box>D</Box>
          <Box>E</Box>
          <Box>F</Box>
          <Box>G</Box>
          <Box>H</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box fixed>
            <div style={{ width: '50px' }} />
          </Box>
          <Box />
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box fixed>
            <div style={{ width: '500px' }} />
          </Box>
          <Box />
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>
            <Flex spacing={this.state.spacing} col>
              <Box />
              <Box />
            </Flex>
          </Box>
          <Box>
            <Flex spacing={this.state.spacing} col reverse>
              <Box />
              <Box />
            </Flex>
          </Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box>
            <Flex spacing={this.state.spacing} col>
              <Box>
                <Flex>
                  <Box />
                  <Box />
                  <Box />
                </Flex>
              </Box>
              <Box />
            </Flex>
          </Box>
          <Box>
            <Flex spacing={this.state.spacing} col reverse>
              <Box />
              <Box />
            </Flex>
          </Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box half>
            <Flex spacing={this.state.spacing} col>
              <Box>
                <Flex>
                  <Box />
                  <Box />
                  <Box />
                </Flex>
              </Box>
              <Box />
            </Flex>
          </Box>
          <Box half>
            <Flex spacing={this.state.spacing} col reverse>
              <Box />
              <Box />
            </Flex>
          </Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{ height: '200px' }}>
          <Box half>
            <Flex>
              <Box half>
                <Flex spacing={this.state.spacing} col>
                  <Box>
                    <Flex>
                      <Box />
                      <Box />
                      <Box />
                    </Flex>
                  </Box>
                  <Box />
                </Flex>
              </Box>
              <Box half>
                <Flex spacing={this.state.spacing} col reverse>
                  <Box />
                  <Box />
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box half>
            <Flex spacing={this.state.spacing} col>
              <Box>
                <Flex>
                  <Box />
                  <Box />
                  <Box />
                </Flex>
              </Box>
              <Box />
            </Flex>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default FlexPage;
