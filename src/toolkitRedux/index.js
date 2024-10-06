import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import createSagaMiddleware from "redux-saga";
//import toolkitReducer from "./toolkitReducer";
import { countWatcher } from "../Sagas/countSaga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    toolkit: toolkitSlice
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(countWatcher);