import {
    GET_MOVE,
    SET_MOVE,
    GAME_OVER,
    SET_USER,
    RESET_GRID,
    GAME_STATUS_AWAITING,
    GAME_STATUS_IN_PROGRESS,
} from '../Utilities/Constants';
const initialState = {
    moveHistory: [],
    gameStatus: GAME_STATUS_AWAITING,
    userPlayerNumber: 1,
};

export default function GameReducer(state = initialState, action) {
    const { data = {} } = action;

    switch (action.type) {
        case GET_MOVE: {
            return { ...state, moveHistory: data }
        }
        case SET_MOVE: {
            return { ...state, moveHistory: [...state.moveHistory, data] }
        }
        case GAME_OVER: {
            return { ...state, gameStatus: data }
        }
        case SET_USER: {
            return { ...state, userPlayerNumber: data, gameStatus: GAME_STATUS_IN_PROGRESS }
        }
        case RESET_GRID: {
            return { ...state, moveHistory: [], gameStatus: GAME_STATUS_AWAITING }
        }
        default:
            return state;
    }
}
