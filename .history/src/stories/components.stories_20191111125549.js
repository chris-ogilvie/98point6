import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';

// import { text } from '@storybook/addon-knobs';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'Components',
  };

  export const TokenSlotStory = () =>
    <TokenSlot
      tokenValue=bool
    />;

