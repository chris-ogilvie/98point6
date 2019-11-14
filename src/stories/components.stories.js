import React from 'react';
import TokenSlot from '../components/TokenSlot';
import TokenGrid from '../components/TokenGrid';

export default {
    title: 'Components',
  };

  export const TokenSlotStory = () =>
    <TokenSlot
        tokenValue={1}
    />;

    export const TokenGridStory = () =>
    <TokenGrid
        moveHistory={[0,1,1,2,3]}
    />;