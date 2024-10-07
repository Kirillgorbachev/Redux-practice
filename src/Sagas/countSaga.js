import { takeEvery,put } from "redux-saga/effects";
import { ASYNC_DECREMENT } from "../store/countReducer";
import { decrementAction } from "../store/countReducer";
import { asyncDecrement } from "../toolkitRedux/toolkitSlice";
import { decrement } from "../toolkitRedux/toolkitSlice";

const delay = (ms) => (new Promise (resolve => setTimeout(resolve,ms)));

function* countWorker () {
    yield delay(1000);
    yield put(decrement());
}

export function* countWatcher() {
    yield takeEvery(asyncDecrement, countWorker);
}