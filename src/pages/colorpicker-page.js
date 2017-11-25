import React from 'react';
import { ColorPicker } from '../components/colorpicker';
import { Flex, Box } from '../components/flex';

const ColorPickerPage = () => {
  return (
    <Flex col mt="l" mb="l">
      <Box>
        <ColorPicker />
      </Box>
      <Box>
        <ColorPicker initialMode="hex" />
      </Box>
      <Box>
        <ColorPicker initialMode="hsl" />
      </Box>
      <Box>
        <ColorPicker initialMode="hsl" hideModeSwitch />
      </Box>
      <Box>
        <ColorPicker initialMode="hex" hideModeSwitch hideColorSpace />
      </Box>
    </Flex>
  );
};

export default ColorPickerPage;
