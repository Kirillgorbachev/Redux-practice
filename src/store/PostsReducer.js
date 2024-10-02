const initialState = {
    posts: [],
    loading: false
}

export const DOWNLOAD_POSTS_FROM_API_REQUEST = "DOWNLOAD_POSTS_FROM_API_REQUEST";
export const DOWNLOAD_POSTS_FROM_API_SUCCESS = "DOWNLOAD_POSTS_FROM_API_SUCCESS";
export const DOWNLOAD_POSTS_FROM_API_FAILURE = "DOWNLOAD_POSTS_FROM_API_FAILURE";
export const ASYNC_DOWNLOAD_POSTS = "ASYNC_DOWNLOAD_POSTS";


export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOWNLOAD_POSTS_FROM_API_REQUEST:
            return {...state, loading: true};

        case DOWNLOAD_POSTS_FROM_API_SUCCESS:
            return {...state, posts: action.payload, loading: false};

        case DOWNLOAD_POSTS_FROM_API_FAILURE:
            return {...state, loading: false};

        default:
            return state;
    }
}

export const postsSuccessAction = (payload) => {return {type: DOWNLOAD_POSTS_FROM_API_SUCCESS, payload}};
export const postsRequestAction = () => {return {type: DOWNLOAD_POSTS_FROM_API_REQUEST}};
export const postsFailureAction = () => {return {type: DOWNLOAD_POSTS_FROM_API_FAILURE}};
export const downloadPostsActionApi = () => {return {type: ASYNC_DOWNLOAD_POSTS}};