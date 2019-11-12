import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import './TokenGrid.css';

const propTypes = {
    gridValues: PropTypes.arrayOf(PropTypes.number),
    onClick: PropTypes.func,
};

const defaultProps = {
    gridValues: [],
    onClick: () => {},
};

const TokenGrid = ({gridValues, onClick}) => {
    let currentIndex = 0;
    let columnNumber = 0;

    if (!Array.isArray(gridValues) || !gridValues.length) {
        return null;
    }
    
    return (
        <div className="gridContainer">
            {gridValues.map(tokenValue => {
                currentIndex += 1;
                columnNumber = columnNumber < 4 ? ++columnNumber : 1;
                // console.log('setting columnNumber=', columnNumber)
                return (
                    <TokenSlot                    
                        columnNumber={columnNumber}
                        key={`token-slot-${currentIndex}`}
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
