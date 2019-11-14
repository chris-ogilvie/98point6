import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import './TokenGrid.css';

const propTypes = {
    gridValues: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClick: PropTypes.func.isRequired,
};

const defaultProps = {
    gridValues: [],
    onClick: () => {},
};

const TokenGrid = ({gridValues, onClick}) => {
    let cellIndex = 0;
    let columnNumber = 0;

    if (!Array.isArray(gridValues) || !gridValues.length) {
        return null;
    }
    
    return (
        <div className="gridContainer">
            {gridValues.map(tokenValue => {
                cellIndex += 1;
                columnNumber = columnNumber < 4 ? ++columnNumber : 1;
                // console.log('setting columnNumber=', columnNumber)
                return (
                    <TokenSlot                    
                        columnNumber={columnNumber}
                        key={`token-slot-${cellIndex}`}
                        onClick={onClick}
                        tokenValue={tokenValue}
                    />
                );
            })}
        </div>
    );
};

TokenGrid.displayName = 'TokenGrid';
TokenGrid.defaultProps = defaultProps;
TokenGrid.propTypes = propTypes;

export default TokenGrid;
