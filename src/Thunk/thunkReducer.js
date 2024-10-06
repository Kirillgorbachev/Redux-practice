import { usersSuccessAction,usersRequestAction,usersFailureAction } from "../store/userReducer";
import { INCREMENT } from "../store/countReducer";
import { increment } from "../toolkitRedux/toolkitSlice";

export const fetchUsersFromApi = () => {
    return async (dispatch) => {
        dispatch(usersRequestAction());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log(response);
            if (!response.ok) {
                throw new Error ("ошибка " + response.status);
            }
    
            const data = await response.json();
            console.log (data);
            dispatch(usersSuccessAction(data));
    
        } catch (error) {
            dispatch(usersFailureAction());
            console.log("ошибка при отправке запроса на сервер " + error);
        }
    }
}

const delay = (ms) => (new Promise (resolve => setTimeout(resolve,ms)));

export const incrementThunk = () => {
    //delay(2000).then(() => {console.log("жопа")});
    return async (dispatch) => {
        delay(2000).then(() => {
            console.log("жопа");
            //dispatch({ type: INCREMENT });
            dispatch(increment());
        })
    }
}

export const incrementTimeOut = () => {
    return (dispatch) => {
         setTimeout( () => {
            dispatch(increment());
    }, 1500);
    }
}