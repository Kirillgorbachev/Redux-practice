import { takeEvery,put,call } from "redux-saga/effects";
import { postsSuccessAction,postsRequestAction,postsFailureAction } from "../store/PostsReducer";
import { ASYNC_DOWNLOAD_POSTS } from "../store/PostsReducer";

function* postsWorker() {
    yield put(postsRequestAction());
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error("ошибка: "+ response.status);
        }
        const data = yield response.json();
        yield put(postsSuccessAction(data))
    } catch(error) {
        console.log("Ошибка при отправке запроса " + error.message);
        yield put(postsFailureAction());
    }
}

export function* postsWatcher() {
    yield takeEvery(ASYNC_DOWNLOAD_POSTS, postsWorker);
}