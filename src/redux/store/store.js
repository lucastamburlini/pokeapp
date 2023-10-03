import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import infoReducer from '../reducers/infoReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    infoReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))

)

export default store;