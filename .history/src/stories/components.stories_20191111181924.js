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

    export const TokenGridStory = () =>
    <TokenGrid
      gridValues={[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1]}
      // gridValues={gridDataSet}
    />;