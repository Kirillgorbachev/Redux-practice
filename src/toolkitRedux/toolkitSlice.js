import { createSlice } from "@reduxjs/toolkit";



const reduxSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        todos: []
    },
    reducers: { 
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeTodo(state) {
            state.todos.pop();
        },
        asyncDecrement() {},

    }
});

export default reduxSlice.reducer;
export const {increment, decrement, addTodo, removeTodo, asyncDecrement} = reduxSlice.actions;