import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, PURGE } from 'redux-persist'
import reducers from '../reducers';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);

//sets up redux-persist to watch the store to watch for state changes
//can add .PURGE() at the end for testing with a clean state on reload
persistStore(store, null);

export default store;