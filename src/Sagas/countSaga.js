import { takeEvery,put } from "redux-saga/effects";
import { ASYNC_DECREMENT } from "../store/countReducer";
import { decrementAction } from "../store/countReducer";

const delay = (ms) => (new Promise (resolve => setTimeout(resolve,ms)));

function* countWorker () {
    yield delay(1000);
    yield put(decrementAction());
}

export function* countWatcher() {
    yield takeEvery(ASYNC_DECREMENT, countWorker);
}