import React from 'react';
import { storiesOf } from '@storybook/react';
import TokenContainer from 'components/TokenContainer';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'TokenContainer',
  };

storiesOf('foo/TokenContainer', module)
    .add('default', (() => (
        <TokenContainer
        />
    )));
