const initialState = {
    users: [],
    loading: false
}


export const LOADING_USERS_REQUEST = "LOADING_USERS_REQUEST";
export const LOADING_USERS_SUCCESS = "LOADING_USERS_SUCCESS";
export const LOADING_USERS_FAILURE = "LOADING_USERS_FAILURE";
export const ADD_USER = "ADD_USER";


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USERS_REQUEST:
            return {...state, loading: true};

        case LOADING_USERS_SUCCESS:
            return {...state, users: action.payload, loading: false};

        case LOADING_USERS_FAILURE:
            return {...state, loading: false};

        case ADD_USER:
            return {...state, users: [...state.users, action.payload]};


        default:
            return state;
    }
} 

export const usersRequestAction = () => ({type: LOADING_USERS_REQUEST});
export const usersSuccessAction = (payload) => ({type: LOADING_USERS_SUCCESS, payload});
export const usersFailureAction = () => ({type: LOADING_USERS_FAILURE});
export const addUserAction = (user) => ({ type: ADD_USER, payload: user });