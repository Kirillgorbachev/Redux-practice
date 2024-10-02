import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addUserAction} from "../store/userReducer";
import { fetchUsersFromApi } from "../Thunk/thunkReducer";

function Users () {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);
    const usersLoading = useSelector(state => state.userReducer.loading);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");


    const handleAddUser = () => {
        if (userName.trim() === '' || userEmail.trim() === '') {
          alert("Имя и email не могут быть пустыми");
          return;
        }
    
    
        const newUser = {
          id: Date.now(),
          name: userName,
          email: userEmail
        }
    
        dispatch(addUserAction(newUser));
        setUserName("");
        setUserEmail("");
      };

    return (
        <div>
            <button onClick={() => dispatch(fetchUsersFromApi())}>Получить пользователей с сервера</button>
            <div>
                {usersLoading ? (
                <p>загрузка пользователей...</p>
                ) : ( users.map ( user=> (
                <div key={user.id}>
                    {user.name}
                </div>
                ))
                )}
            </div>

            <div>
                <h3>Добавить нового пользователя</h3>
                <input 
                type="text" 
                placeholder="Имя" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                />
                <input 
                type="email" 
                placeholder="Email" 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)} 
                />
                <button onClick={handleAddUser}>Добавить пользователя</button>
            </div>
        </div>
    )
}

export default Users;