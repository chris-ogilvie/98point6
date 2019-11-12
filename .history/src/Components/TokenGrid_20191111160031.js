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

const GridColumn = ({tokenValue}) => {
    return (
        <React.Fragment>
            <TokenSlot />
            <TokenSlot />
            <TokenSlot />
            <TokenSlot />
        </React.Fragment>
    );
};

TokenSlot.displayName = 'GridColumn';
TokenSlot.defaultProps = defaultProps;
TokenSlot.propTypes = propTypes;

export default GridColumn;
