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

    const tempClicker = columnNumber => {
        console.log('columnNumber=', columnNumber);
    }

    if (!Array.isArray(gridValues) || !gridValues.length) {
        return null;
    }

    return (
        <React.Fragment>
            {gridValues.map(gridValue => 
                <TokenSlot
                    columnNumber={3}
                    onClick={tempClicker}
                    tokenValue={gridValue}
                />
            )}
        </React.Fragment>
    );
};

TokenGrid.displayName = 'TokenGrid';
TokenGrid.defaultProps = defaultProps;
TokenGrid.propTypes = propTypes;

export default TokenGrid;
