import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: []
}

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const addTodo = createAction("ADD_TODO");
export const removeTodo = createAction("REMOVE_TODO");

export const toolkitReducer =  createReducer (initialState, (builder) => {
    builder
        .addCase(increment , (state) => {
            state.count = state.count + 1
        })
        .addCase(decrement , (state) => {
            state.count = state.count - 1
        })
        .addCase(addTodo , (state, action) => {
            state.todos.push(action.payload);
        })
        .addCase(removeTodo , (state) => {
            state.todos.pop();
        })
})