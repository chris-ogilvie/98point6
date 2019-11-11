import React from 'react';
import PropTypes from 'prop-types';
import './TokenContainer.css';

const propTypes = {
    tokenValue: PropTypes.number, // values: null = no token, 1 = Player 1 token, 2 = Player 2 token
};

const defaultProps = {
    tokenValue: null,
};

const TokenContainer = ({tokenValue}s) => {

    const tokenStyle = () => {
        switch (tokenValue) {
            case 1: return 'token-player1';
            case 2: return 'token-player2';
            default: return '';
        };
    }

    return (
        <div className="tokenContainer">
            <div className={`circle ${tokenStyle}`}></div>
        </div>
    );
};

TokenContainer.displayName = 'TokenContainer';
TokenContainer.defaultProps = defaultProps;
TokenContainer.propTypes = propTypes;

export default TokenContainer;
