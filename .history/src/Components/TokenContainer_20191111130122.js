import React from 'react';
import PropTypes from 'prop-types';
import './TokenSlot.css';

const propTypes = {
    tokenValue: PropTypes.number, // values: null = container has no token, 1 = Player 1 token, 2 = Player 2 token
};

const defaultProps = {
    tokenValue: null,
};

const TokenSlot = ({tokenValue}) => {

    return (
        <div className="TokenSlot">
            <div className="circle circlePlayer2"></div>
        </div>
    );
};

TokenSlot.displayName = 'TokenSlot';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default TokenSlot;
