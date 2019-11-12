import React from 'react';
import TokenSlot from '../components/TokenSlot';
import GridColumn from '../components/GridColumn';

export default {
    title: 'Components',
  };

  export const TokenSlotStory = () =>
    <TokenSlot
      tokenValue={null}
    />;

    export const GridColumnStory = () =>
    <GridColumn
      // tokenValue={null}
    />;