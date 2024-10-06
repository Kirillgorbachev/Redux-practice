import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
//import toolkitReducer from "./toolkitReducer";


export const rootReducer = combineReducers({
    toolkit: toolkitSlice
});

export const store = configureStore({
    reducer: rootReducer,
})