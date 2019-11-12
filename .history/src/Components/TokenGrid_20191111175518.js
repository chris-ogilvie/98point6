import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import './TokenGrid.css';

const propTypes = {
    gridValues: PropTypes.arrayOf(
        PropTypes.shape(
            PropTypes.string,
            PropTypes.number,
        )
    ), 
};

const defaultProps = {
    gridValues: [['', 0]],
};

const TokenGrid = ({gridValues}) => {

    const tempClicker = columnNumber => { //todo: temp
        console.log('columnNumber=', columnNumber);
    }

    debugger;
    if (!Array.isArray(gridValues) || !gridValues.length) {
        return null;
    }

    return (
        <div className="gridContainer">
            {gridValues.map(gridValue => 
                <TokenSlot
                    
                    columnNumber={gridValue.key}
                    onClick={tempClicker} //todo: temp
                    tokenValue={gridValue.value}
                />
            )}
        </div>
    );
};

TokenGrid.displayName = 'TokenGrid';
TokenGrid.defaultProps = defaultProps;
TokenGrid.propTypes = propTypes;

export default TokenGrid;
