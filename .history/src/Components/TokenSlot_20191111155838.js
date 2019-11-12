import React from 'react';
import PropTypes from 'prop-types';
import './TokenSlot.css';

const propTypes = {
    tokenValue: PropTypes.number, // values: null = no token, 1 = Player 1 token, 2 = Player 2 token
};

const defaultProps = {
    tokenValue: 0,
};

const TokenSlot = ({tokenValue}) => {
    
    const tokenStyle = () => {
        switch (tokenValue) {
            case 1: return 'player1';
            case 2: return 'player2';
            default: return '';
        };
    }

    return (
        <div className="TokenSlot">
            <div className={`circle ${tokenStyle()}`}></div>
        </div>
    );
};

TokenSlot.displayName = 'TokenSlot';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default TokenSlot;
