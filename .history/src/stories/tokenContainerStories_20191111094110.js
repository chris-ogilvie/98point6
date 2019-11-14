import React from 'react';
import { storiesOf } from '@storybook/react';
import TokenSlot from 'components/TokenSlot';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';


storiesOf('TokenSlot', module)
    .add('default', (() => (
        <TokenSlot
        />
    )));
