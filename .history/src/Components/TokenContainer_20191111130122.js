import React from 'react';
import PropTypes from 'prop-types';
import './TokenContainer.css';

const propTypes = {
    tokenValue: PropTypes.number, // values: null = container has no token, 1 = Player 1 token, 2 = Player 2 token
};

const defaultProps = {
    tokenValue: null,
};

const TokenContainer = ({tokenValue}) => {

    return (
        <div className="tokenContainer">
            <div className="circle circlePlayer2"></div>
        </div>
    );
};

TokenContainer.displayName = 'TokenContainer';
TokenContainer.defaultProps = defaultProps;
TokenContainer.propTypes = propTypes;

export default TokenContainer;
