import React from 'react';
import PropTypes from 'prop-types';
import './TokenContainer.css';

const TokenContainer = ({tokenValue}) => {

    return (
        //<div>I am a token container with value: {tokenValue}</div>
        <div className="tokenContainer">
            <div className="circle"></div>
        </div>
    );
};

export default TokenContainer;
