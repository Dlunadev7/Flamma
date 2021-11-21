import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import devDucks from './developmentsDucks'
import propDucks from './propertiesDucks'
import themeDucks from './themeDucks'
import settingsDucks from './settingsDucks'
import contactDucks from './contactDucks'
import noveltiesDucks from './noveltiesDucks'

const rootReducer = combineReducers({
    properties: propDucks,
    developments: devDucks,
    theme:themeDucks,
    settings:settingsDucks,
    contact:contactDucks,
    novelties:noveltiesDucks,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}