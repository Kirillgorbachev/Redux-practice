import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";


export const rootReducer = combineReducers({
    toolkit: toolkitReducer
});

export const store = configureStore({
    reducer: rootReducer,
})