import React from 'react';
import TokenContainer from '../components/TokenContainer';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'Components',
  };

  export const TokenContainerStory = () =>
    <TokenContainer
      tokenValue="foo"
    />;

