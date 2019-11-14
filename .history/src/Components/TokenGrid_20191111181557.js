import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import './TokenGrid.css';

const propTypes = {
    gridValues: PropTypes.arrayOf(PropTypes.number)
    // gridValues: PropTypes.arrayOf(
    //     PropTypes.shape(
    //         PropTypes.string,
    //         PropTypes.number,
    //     )
    // ), 
};

const defaultProps = {
    gridValues: []
    // gridValues: [['', 0]],
};

const TokenGrid = ({gridValues}) => {
    let currentIndex = 0;
    let columnNumber = 0;

    const tempClicker = columnNumber => { //todo: temp
        console.log('columnNumber=', columnNumber);
    }

    debugger;
    if (!Array.isArray(gridValues) || !gridValues.length) {
        return null;
    }

    return (
        <div className="gridContainer">
            {gridValues.map(tokenValue => {
                currentIndex += 1;
                columnNumber = columnNumber < 3 ? columnNumber++ : 0;
                return (
                    <TokenSlot                    
                        columnNumber={columnNumber}
                        key={`token-slot-${currentIndex}`}
                        onClick={tempClicker} //todo: temp
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
