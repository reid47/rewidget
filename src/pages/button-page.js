import React from 'react';
import Button from '../components/button/button';
import ButtonGroup from '../components/button/button-group';
import { Flex, Box } from '../components/flex';

const ButtonPage = () => {
  return (
    <Flex col mt="large" mb="large">
      <Box>
        <Button primary>primary</Button>
      </Box>
      <Box>
        <Button secondary>secondary</Button>
      </Box>
      <Box>
        <Button success>success</Button>
      </Box>
      <Box>
        <Button alert>alert</Button>
      </Box>
      <Box>
        <Button warning>warning</Button>
      </Box>
      <Box>
        <Button alt primary>primary</Button>
      </Box>
      <Box>
        <Button alt secondary>secondary</Button>
      </Box>
      <Box>
        <Button alt success>success</Button>
      </Box>
      <Box>
        <Button alt alert>alert</Button>
      </Box>
      <Box>
        <Button alt warning>warning</Button>
      </Box>
      <Box>
        <Button plain primary>primary</Button>
      </Box>
      <Box>
        <Button plain secondary>secondary</Button>
      </Box>
      <Box>
        <Button plain success>success</Button>
      </Box>
      <Box>
        <Button plain alert>alert</Button>
      </Box>
      <Box>
        <Button plain warning>warning</Button>
      </Box>
      <Box>
        <ButtonGroup>
          <Button>first</Button>
          <Button alt>second</Button>
          <Button>third</Button>
          <Button>fourth</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Button size="tiny">tiny</Button>
      </Box>
      <Box>
        <Button size="small">small</Button>
      </Box>
      <Box>
        <Button size="default">default</Button>
      </Box>
      <Box>
        <Button size="large">large</Button>
      </Box>
      <Box>
        <Button size="huge">huge</Button>
      </Box>
    </Flex>
  );
};

export default ButtonPage;
