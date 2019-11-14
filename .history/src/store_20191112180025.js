import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';

export default function (initialState) {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);
24

    return store;
}