import React from 'react';
import PropTypes from 'prop-types';
import './TokenSlot.css';

const propTypes = {
    columnNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    tokenValue: PropTypes.number.isRequired, // values: 0 = no token, 1 = Player 1 token, 2 = Player 2 token
};

const defaultProps = {
    columnNumber: 0,
    onClick: () => {},
    tokenValue: 0,
};

const TokenSlot = ({columnNumber, onClick, tokenValue}) => {
    
    const tokenStyle = () => {
        switch (tokenValue) {
            case 1: return 'player1';
            case 2: return 'player2';
            default: return '';
        };
    }

    return (
        <div
            className="TokenSlot"
            onClick={() => onClick(columnNumber)}
        >
            <div className={`circle ${tokenStyle()}`}></div>
        </div>
    );
};

TokenSlot.displayName = 'TokenSlot';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default TokenSlot;
