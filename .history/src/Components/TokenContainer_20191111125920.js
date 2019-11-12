import React from 'react';
import PropTypes from 'prop-types';
import './TokenSlot.css';

const propTypes = {
    tokenValue: PropTypes.bool,
};

const defaultProps = {
    tokenValue: null,
};

const TokenSlot = ({tokenValue}) => {

    return (
        <div className="TokenSlot">
            <div className="circle circlePlayer1"></div>
        </div>
    );
};

TokenSlot.displayName = 'TokenSlot';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default TokenSlot;
