import React from 'react';
import PropTypes from 'prop-types';
import TokenContainer from '../components/TokenContainer';

// import { text } from '@storybook/addon-knobs';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'Components',
  };

  export const TokenContainerStory = () =>
    <TokenContainer
      tokenValue=bool
    />;

