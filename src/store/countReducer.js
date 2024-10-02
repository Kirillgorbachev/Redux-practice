const initialState = {
    count: 0
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";
export const ADD_COUNT = "ADD_COUNT";
export const REMOVE_COUNT = "REMOVE_COUNT";


export const countReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log("i'm here");
            return {...state, count: state.count + 1};

        case DECREMENT:
            return {...state, count: state.count - 1};
        
        case ADD_COUNT:
            return {...state, count: state.count + action.payload};

        case REMOVE_COUNT:
            return {...state, count: state.count - action.payload};
        
        default:
            return state;
    }
}

export const incrementAction = () => {return {type:INCREMENT }};
export const decrementAction = () => {return {type: DECREMENT}};
export const asyncDecremntAction = () => {return {type: ASYNC_DECREMENT}};
export const addCountAction = (payload) => {return{type: ADD_COUNT, payload}};
export const removeCountAction = (payload) => {return{type: REMOVE_COUNT, payload}};
