import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { incrementThunk } from "../Thunk/thunkReducer";
import { asyncDecremntAction,addCountAction,removeCountAction } from "../store/countReducer";

function Counter () {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(0);
    const count = useSelector(state => state.countReducer.count);

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
        </div>
    )
}

export default Counter;