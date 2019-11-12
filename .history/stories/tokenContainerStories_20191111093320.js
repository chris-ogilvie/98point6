import React from 'react';
import { storiesOf } from '@storybook/react';
import TokenSlot from 'components/TokenSlot';
// import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';


storiesOf('PackageCheckout/CardVerificationOnly', module)
    .add('default', (() => (
        <TokenSlot
            // creditPaymentType={text('creditPaymentType', 'STORED')}
            // deviceBrand={text('deviceBrand', 'MC')}
            // deviceExpMonth={number('deviceExpMonth', 8)}
            // deviceExpYear={number('deviceExpYear', 2022)}
            // hasMultipleCreditCards={boolean('hasMultipleCreditCards', false)}
            // isSubmitStep={boolean('isSubmitStep', false)}
            // maskedNumber={text('maskedNumber', '************1115')}
            // onSetStepIsDirty={onSetStepIsDirty}
            // updateCreditCard={updateCreditCard}
        />
    )));
