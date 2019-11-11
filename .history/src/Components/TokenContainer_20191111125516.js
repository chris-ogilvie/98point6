import React from 'react';
import PropTypes from 'prop-types';
import './TokenContainer.css';

const propTypes = {
    tokenValue: PropTypes.bool,
};

const defaultProps = {
    brand: '',
};

const TokenContainer = ({tokenValue}) => {

    return (
        <div className="tokenContainer">
            <div className="circle"></div>
        </div>
    );
};

TokenContainer.displayName = 'TokenContainer';
TokenContainer.defaultProps = defaultProps;
TokenContainer.propTypes = propTypes;

export default TokenContainer;
