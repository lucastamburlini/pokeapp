import { createStore, applyMiddleware, compose, combineReducers,  } from 'redux';
import thunkMiddleware from 'redux-thunk'
import filterReducer from '../reducers/filterReducer';
import infoReducer from '../reducers/infoReducer'


const rootReducer = combineReducers({
    info: infoReducer,
    filter: filterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))

)

export default store;