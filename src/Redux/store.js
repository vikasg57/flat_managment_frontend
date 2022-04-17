import{createStore,applyMiddleware,compose,combineReducers} from 'redux'

import {reducer} from "./reducer"

import thunk from "redux-thunk"

export const rootreducer=combineReducers({

    flat:reducer
})


export const store=createStore(rootreducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

 console.log(store.getState())