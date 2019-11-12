import React from 'react';
import './TokenSlot.css';

const TokenSlot = ({tokenValue}) => {

    return (
        //<div>I am a token container with value: {tokenValue}</div>
        <div className="TokenSlot">
            <div className="circle"></div>
        </div>
    );
};

export default TokenSlot;
