import { 
    HTTP_RESPONSE_OK,
    HTTP_RESPONSE_BAD_REQUEST,
    MOVES_API,
    GET_MOVE,
    SET_MOVE,
    GAME_OVER,
    SET_USER,
    RESET_GRID
} from '../Utilities/Constants';

function setUserPlayerNumber(playerOrder) {
    return dispatch => {
        dispatch({ type: SET_USER, data: playerOrder });
    }
}

function getMove(moveHistory = []) {
    const url = `${MOVES_API}?moves=[${moveHistory.length ? moveHistory : '' }]`;

    return dispatch => 
        fetch(url)
            .then(response => {
                switch ((response || {}).status) {
                    case HTTP_RESPONSE_OK:
                        return response.json();
                    case HTTP_RESPONSE_BAD_REQUEST:
                        //todo
                        break;
                    default:
                        //todo
                        break;
                }            
            })
            .then(data => {
                return dispatch({ type: GET_MOVE, data: data });
            })
            .catch(error => {
                // todo
            });
}

function setMove(column) {
    return dispatch => {
        dispatch({ type: SET_MOVE, data: column });
    }
}

function setGameOver(status) {
    return dispatch => {
        dispatch({ type: GAME_OVER, data: status });
    }
}

function resetGrid() {
    return dispatch => {
        dispatch({ type: RESET_GRID });
    }
}

export {
    getMove,
    resetGrid,
    setMove,
    setGameOver,
    setUserPlayerNumber,
};
