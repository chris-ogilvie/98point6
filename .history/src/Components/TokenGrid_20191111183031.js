import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import './TokenGrid.css';

const propTypes = {
    gridValues: PropTypes.arrayOf(PropTypes.number) 
};

const defaultProps = {
    gridValues: []
};

const TokenGrid = ({gridValues}) => {
    let currentIndex = 0;
    let columnNumber = 0;

    const tempClicker = columnNumber => { //todo: temp
        console.log('columnNumber=', columnNumber);
    }

    if (!Array.isArray(gridValues) || !gridValues.length) {
        return null;
    }

    return (
        <div className="gridContainer">
            {gridValues.map(tokenValue => {
                const tokenSlot = (
                    <TokenSlot                    
                        columnNumber={columnNumber}
                        key={`token-slot-${currentIndex}`}
                        onClick={tempClicker} //todo: temp
                        tokenValue={tokenValue}
                    />
                );
                currentIndex += 1;
                columnNumber = columnNumber < 3 ? ++columnNumber : 0;
                console.log('setting columnNumber=', columnNumber)
                return tokenSlot;
            })}
        </div>
    );
};

TokenGrid.displayName = 'TokenGrid';
TokenGrid.defaultProps = defaultProps;
TokenGrid.propTypes = propTypes;

export default TokenGrid;
