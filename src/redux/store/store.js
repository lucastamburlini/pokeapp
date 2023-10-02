import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import infoReducer from '../reducers/infoReducer';
import postReducer from '../reducers/postReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(
    {
        info: infoReducer,
        post: postReducer
    }
)

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))

)

export default store;