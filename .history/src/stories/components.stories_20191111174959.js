import React from 'react';
import TokenSlot from '../components/TokenSlot';
import TokenGrid from '../components/TokenGrid';

export default {
    title: 'Components',
  };

  const gridDataSet = new Map([
    ['a:0', 1],
    ['b:0', 1],
    ['c:0', 1],
    ['d:0', 1],
    ['a:1', 1],
    ['b:1', 1],
    ['c:1', 1],
    ['d:1', 1],
    ['a:2', 1],
    ['b:2', 1],
    ['c:2', 1],
    ['d:2', 1],
    ['a:3', 1],
    ['b:3', 1],
    ['c:3', 1],
    ['d:3', 1],
  ]);

  export const TokenSlotStory = () =>
    <TokenSlot
      tokenValue={null}
    />;

    export const TokenGridStory = () =>
    <TokenGrid
      gridValues={[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    />;