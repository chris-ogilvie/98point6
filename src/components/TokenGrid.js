import React from 'react';
import PropTypes from 'prop-types';
import TokenSlot from '../components/TokenSlot';
import {
    formatGridData
} from '../Utilities/HelperFunctions';
import './TokenGrid.css';

const propTypes = {
    moveHistory: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClick: PropTypes.func.isRequired,
};

const defaultProps = {
    moveHistory: [],
    onClick: () => {},
};

const TokenGrid = ({moveHistory, onClick}) => {
    let index = -1;
    let columnNumber = -1;
    const gridValues = formatGridData(moveHistory);
    
    return (
        <div className="gridContainer">
            {gridValues.map(tokenValue => {
                index += 1;
                columnNumber = columnNumber < 3 ? ++columnNumber : 0;
                return (
                    <TokenSlot                    
                        columnNumber={columnNumber}
                        key={`token-slot-${index}`}
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
