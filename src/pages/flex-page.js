import React from 'react';
import {Flex, Box} from '../components/flexlayout/flex';
import Button from '../components/buttons/Button';

class FlexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spacing: 'normal'
    };
  }

  render() {
    return (
      <div style={{margin: '1rem', fontFamily: 'monospace'}}>
        <div>
          <div>Spacing:</div>
          <Button alt={this.state.spacing === 'none'} style={{margin: '0 0.5rem 0.5rem 0'}} onClick={() => this.setState({spacing: 'none'})}>none</Button>
          <Button alt={this.state.spacing === 'tiny'} style={{margin: '0 0.5rem 0.5rem 0'}} onClick={() => this.setState({spacing: 'tiny'})}>tiny</Button>
          <Button alt={this.state.spacing === 'small'} style={{margin: '0 0.5rem 0.5rem 0'}} onClick={() => this.setState({spacing: 'small'})}>small</Button>
          <Button alt={this.state.spacing === 'normal'} style={{margin: '0 0.5rem 0.5rem 0'}} onClick={() => this.setState({spacing: 'normal'})}>normal</Button>
          <Button alt={this.state.spacing === 'large'} style={{margin: '0 0.5rem 0.5rem 0'}} onClick={() => this.setState({spacing: 'large'})}>large</Button>
          <Button alt={this.state.spacing === 'huge'} style={{margin: '0 0.5rem 0.5rem 0'}} onClick={() => this.setState({spacing: 'huge'})}>huge</Button>
        </div>

        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box>A</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box>A</Box>
          <Box>B</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
        </Flex>
        <Flex spacing={this.state.spacing} reverse style={{height: '200px'}}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
          <Box>D</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box alignContent="top-left">A</Box>
          <Box alignContent="top-center">B</Box>
          <Box alignContent="top-right">C</Box>
          <Box alignContent="center-right">D</Box>
          <Box alignContent="bottom-right">E</Box>
          <Box alignContent="bottom-center">F</Box>
          <Box alignContent="bottom-left">G</Box>
          <Box alignContent="center-left">H</Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box fixed><div style={{width: '50px'}}></div></Box>
          <Box/>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box fixed><div style={{width: '500px'}}></div></Box>
          <Box/>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box>
            <Flex spacing={this.state.spacing} col>
              <Box/>
              <Box/>
            </Flex>
          </Box>
          <Box>
            <Flex spacing={this.state.spacing} col reverse>
              <Box/>
              <Box/>
            </Flex>
          </Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box>
            <Flex spacing={this.state.spacing} col>
              <Box>
                <Flex>
                  <Box/>
                  <Box/>
                  <Box/>
                </Flex>
              </Box>
              <Box/>
            </Flex>
          </Box>
          <Box>
            <Flex spacing={this.state.spacing} col reverse>
              <Box/>
              <Box/>
            </Flex>
          </Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box half>
            <Flex spacing={this.state.spacing} col>
              <Box>
                <Flex>
                  <Box/>
                  <Box/>
                  <Box/>
                </Flex>
              </Box>
              <Box/>
            </Flex>
          </Box>
          <Box half>
            <Flex spacing={this.state.spacing} col reverse>
              <Box/>
              <Box/>
            </Flex>
          </Box>
        </Flex>
        <Flex spacing={this.state.spacing} style={{height: '200px'}}>
          <Box half>
            <Flex>
              <Box half>
                <Flex spacing={this.state.spacing} col>
                  <Box>
                    <Flex>
                      <Box/>
                      <Box/>
                      <Box/>
                    </Flex>
                  </Box>
                  <Box/>
                </Flex>
              </Box>
              <Box half>
                <Flex spacing={this.state.spacing} col reverse>
                  <Box/>
                  <Box/>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box half>
            <Flex spacing={this.state.spacing} col>
              <Box>
                <Flex>
                  <Box/>
                  <Box/>
                  <Box/>
                </Flex>
              </Box>
              <Box/>
            </Flex>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default FlexPage;
