import React from 'react';
import TokenSlot from '../components/TokenSlot';

// import { text } from '@storybook/addon-knobs';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'Components',
  };

  export const TokenSlotStory = () =>
    <TokenSlot
      tokenValue="foo"
    />;

