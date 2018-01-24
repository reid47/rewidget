import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

export default class Brain extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    titlePrefix: PropTypes.string,
    titleSuffix: PropTypes.string
  };

  render() {
    return <Helmet>
      {title && <title>{titlePrefix}{title}{titleSuffix}</title>}
    </Helmet>;
  }
}
