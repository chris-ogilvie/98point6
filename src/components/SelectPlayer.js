import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    selectPlayer: PropTypes.func.isRequired,
};

const defaultProps = {
    selectPlayer: () => {},
};

const SelectPlayer = ({ selectPlayer }) => {
    return (
        <div>
            <h3>Select Player:</h3>
            <input
                type="button"
                value="Player 1"
                onClick={() => selectPlayer(1)}
            />
            <input
                type="button"
                value="Player 2"
                onClick={() => selectPlayer(2)}
            />
        </div>
    );
};

SelectPlayer.displayName = 'SelectPlayer';
SelectPlayer.defaultProps = defaultProps;
SelectPlayer.propTypes = propTypes;

export default SelectPlayer;
