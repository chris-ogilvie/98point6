import React from 'react';
import PropTypes from 'prop-types';
import './TokenSlot.css';

const propTypes = {
    tokenValue: PropTypes.number, // values: null = no token, 1 = Player 1 token, 2 = Player 2 token
};

const defaultProps = {
    tokenValue: null,
};

const TokenSlot = ({tokenValue}) => {

    debugger;

    const tokenStyle = () => {
        debugger;
        switch (tokenValue) {
            case 1: return 'token-player1';
            case 2: return 'token-player2';
            default: return '';
        };
    }

    return (
        <div className="TokenSlot">
            <div className={`circle ${tokenStyle}`}></div>
        </div>
    );
};

TokenSlot.displayName = 'TokenSlot';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default TokenSlot;
