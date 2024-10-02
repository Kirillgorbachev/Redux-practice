import { all } from 'redux-saga/effects';
import {countWatcher} from './countSaga';
import { postsWatcher } from './postsSaga';

export function* rootSaga() {
    yield all([countWatcher(), postsWatcher()]);
}