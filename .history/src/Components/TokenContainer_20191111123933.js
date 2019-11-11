import React from 'react';
import './TokenContainer.css';

const TokenContainer = ({tokenValue}) => {

    return (
        //<div>I am a token container with value: {tokenValue}</div>
        <div className="tokenContainer">
            <div className="circle">foo</div>
        </div>
    );
};

export default TokenContainer;
