import React from 'react';
import TokenSlot from '../components/TokenSlot';
import TokenGrid from '../components/TokenGrid';

export default {
    title: 'Components',
  };

  export const TokenSlotStory = () =>
    <TokenSlot
      tokenValue={null}
    />;

    export const GridColumnStory = () =>
    <TokenGrid
      gridValues={new Array(16)}
    />;