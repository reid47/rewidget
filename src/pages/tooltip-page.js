import React from 'react';
import { Flex, Box } from '../components/flex';
import Button from '../components/button/button';
import withTooltip from '../components/tooltip/tooltip';
import Icon from '../components/icon/icon';

const TooltipButton = withTooltip(Button);
const TooltipAnchor = withTooltip('a');

export default class TooltipPage extends React.Component {
  render() {
    return (
      <div style={{ margin: '1rem' }}>
        <Flex col>
          <Box>
            <Icon name="question-mark" size="tiny" />
          </Box>
          <Box>
            <Icon name="question-mark" size="small" />
          </Box>
          <Box>
            <Icon name="question-mark" />
          </Box>
          <Box>
            <Icon name="question-mark" size="large" />
          </Box>
          <Box>
            <Icon name="question-mark" size="huge" />
          </Box>
          <Box>
            <TooltipButton tooltip="I am a tooltip!">Hello</TooltipButton>
          </Box>
          <Box>
            <Button>Hello</Button>
          </Box>
          <Box>
            <TooltipButton
              alt
              position="left"
              tooltip="This is some additional information. This is another sentence of additional information.">
              Hello
            </TooltipButton>
          </Box>
          <Box>
            <Button>Hello</Button>
          </Box>
          <Box>
            <TooltipButton position="top">Hello</TooltipButton>
          </Box>
          <Box>
            <Button>Hello</Button>
          </Box>
          <Box>
            <TooltipButton position="bottom">Hello</TooltipButton>
          </Box>
          <Box>
            <TooltipAnchor href="#tt" tooltip="A tooltip for a link!">
              A link
            </TooltipAnchor>
          </Box>
        </Flex>
      </div>
    );
  }
}
