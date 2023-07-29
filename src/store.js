// store-> reducer-> action ->dispatch

// import {configureStore} from "@reduxjs/toolkit";
import { createStore ,combineReducers } from 'redux';
import tripReducer from "../src/reducers/tripReducer";
import activityReducer from "../src/reducers/activityReducer";


const rootReducer=combineReducers({
    trips:tripReducer,
    activity:activityReducer
});


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;

