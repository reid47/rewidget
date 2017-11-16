import React from 'react';
import PropTypes from 'prop-types';
import { formatSize, sizeBelow } from '../../sizes';
import { Flex, Box } from '../flex';

const lineWidths = [94, 99, 90, 60, 85, 75, 94];

const TextLine = ({size, width, invert}) => {
  return <Box {...{
    style: {
      height: formatSize(size),
      width,
      backgroundColor: invert 
        ? 'rgba(255, 255, 255, 0.5)'
        : 'rgba(150, 150, 150, 0.5)'
    }
  }}/>;
}

export class Placeholder extends React.Component {
  static propTypes = {
    lines: PropTypes.number,
    size: PropTypes.string,
    width: PropTypes.string,
    invert: PropTypes.bool
  };

  static defaultProps = {
    lines: 1,
    size: 'default',
    width: null,
    invert: false
  };

  render() {
    const {lines, size, width, invert} = this.props;

    return (
      <Flex col spacing={sizeBelow(size)}>
        {Array(lines).fill(0).map((_, key) => 
          <TextLine {...{
            key,
            size, 
            invert,
            width: width || `${lineWidths[key % lineWidths.length]}%`
          }}/>)}
      </Flex>
    );
  }
}
