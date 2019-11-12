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

const TokenGrid = ({gridValues}) => {

    debugger;

    if (!Array.isArray(gridValues) || gridValues.length !== 16) {
        return null;
    }

    return (
        <React.Fragment>
            {gridValues.map(gridValue => {
                debugger;
                return (
                <TokenSlot
                    tokenValue={gridValue}
                />
                );}
            )}
        </React.Fragment>
    );
};

TokenGrid.displayName = 'TokenGrid';
TokenGrid.defaultProps = defaultProps;
TokenGrid.propTypes = propTypes;

export default TokenGrid;