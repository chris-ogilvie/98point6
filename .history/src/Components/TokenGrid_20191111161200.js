import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import './TokenGrid.css';

const propTypes = {
    gridValues: PropTypes.arrayOf(PropTypes.number), 
};

const defaultProps = {
    gridValues: [],
};

const TokenGrid = ({tokenValue}) => {

    

    return (
        <React.Fragment>
            { if (Array.isArray(gridValues) && gridValues.length > 0) {

            }}

            {/* <TokenSlot />
            <TokenSlot />
            <TokenSlot />
            <TokenSlot /> */}
        </React.Fragment>
    );
};

TokenGrid.displayName = 'TokenGrid';
TokenGrid.defaultProps = defaultProps;
TokenGrid.propTypes = propTypes;

export default TokenGrid;
