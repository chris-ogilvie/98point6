import React from 'react';
import PropTypes from 'prop-types';
import './TokenContainer.css';

const propTypes = {
    tokenValue: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string, // size options: small, large
};

const defaultProps = {
    brand: '',
    className: null,
    size: ICON_SIZE_SMALL,
};

const TokenContainer = ({tokenValue}) => {

    return (
        //<div>I am a token container with value: {tokenValue}</div>
        <div className="tokenContainer">
            <div className="circle"></div>
        </div>
    );
};

TokenContainer.displayName = 'TokenContainer';
TokenContainer.defaultProps = defaultProps;
TokenContainer.propTypes = propTypes;

export default TokenContainer;
