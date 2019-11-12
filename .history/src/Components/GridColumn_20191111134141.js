import React from 'react';
import PropTypes from 'prop-types';
import './GridColumn.css';

const propTypes = {
    tokenValue: PropTypes.number, 
};

const defaultProps = {
    tokenValue: null,
};

const TokenSlot = ({tokenValue}) => {
    
    const tokenStyle = () => {
        switch (tokenValue) {
            case 1: return 'token-player1';
            case 2: return 'token-player2';
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
