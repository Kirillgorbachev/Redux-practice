import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { incrementThunk } from "../Thunk/thunkReducer";
import { asyncDecremntAction,addCountAction,removeCountAction } from "../store/countReducer";
import { decrement, increment, addTodo, removeTodo } from "../toolkitRedux/toolkitReducer";

function Counter () {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(0);
    const count = useSelector(state => state.countReducer.count);
    // const count = useSelector( state=> state.toolkit.count);
    // const todo = useSelector( state=> state.toolkit.todos);
    // console.log(count);
    // console.log(todo);

    function addValue() {
        dispatch(addCountAction(inputValue));
        setInputValue(0);
      }
    
    
      function removeValue() {
        dispatch(removeCountAction(inputValue));
        setInputValue(0);
      }

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(incrementThunk())}>Increment</button>
            <input
                type="number"
                placeholder="input value"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
            />
            <button onClick={addValue}>Добавить</button>
            <button onClick={removeValue}>Уменьшить</button>
            <button onClick={() => dispatch(asyncDecremntAction())}>Decrement</button>
            {/* <button onClick={() => dispatch(addTodo({ id: Date.now(), title: "помыть посуду"}))}>Добавить ТУДУ</button>
            <button onClick={() => dispatch(removeTodo())}>Удалить ТУДУ</button>
            <div> {todo.map (todo => 
                <div key={todo.id}>
                    {todo.title}
                </div>
            )} </div> */}
        </div>
    )
}

export default Counter;