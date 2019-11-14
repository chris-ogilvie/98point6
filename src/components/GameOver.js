import React from 'react';
import PropTypes from 'prop-types';
import {
    GAME_STATUS_OVER_WIN,
    GAME_STATUS_OVER_LOSE,
    GAME_STATUS_OVER_DRAW,
} from '../Utilities/Constants';

const propTypes = {
    gameStatus: PropTypes.string,
    resetGrid: PropTypes.func.isRequired,
};

const defaultProps = {
    gameStatus: '',
    resetGrid: () => {},
};

const GameOver = ({ gameStatus, resetGrid }) => {
    return (
        <div>
            { gameStatus === GAME_STATUS_OVER_WIN ? 
                <h1>YOU WON!</h1>
                : ''
            }
            { gameStatus === GAME_STATUS_OVER_LOSE ? 
                <h1>YOU LOST</h1>
                : ''
            }
            { gameStatus === GAME_STATUS_OVER_DRAW ? 
                <h1>DRAW</h1>
                : ''
            }
            <input
                type="button"
                value="Play Again"
                onClick={resetGrid}
            />
        </div>
    );
};

GameOver.displayName = 'GameOver';
GameOver.defaultProps = defaultProps;
GameOver.propTypes = propTypes;

export default GameOver;
