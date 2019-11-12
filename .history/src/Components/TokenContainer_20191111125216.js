import React from 'react';
import PropTypes from 'prop-types';
import './TokenSlot.css';

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

const TokenSlot = ({tokenValue}) => {

    return (
        //<div>I am a token container with value: {tokenValue}</div>
        <div className="TokenSlot">
            <div className="circle"></div>
        </div>
    );
};

TokenSlot.displayName = 'TokenSlot';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default TokenSlot;
