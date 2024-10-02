import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./userReducer";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../Sagas/rootSaga";
import { postsReducer } from "./PostsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer,
    countReducer,
    postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);