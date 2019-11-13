import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState) {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        typeof window === 'object' &&
            process.env.NODE_ENV !== 'production' &&
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
    )(createStore);
    /* eslint-enable */
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // http://stackoverflow.com/a/34697765/4115000
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers/index').default; // eslint-disable-line
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}