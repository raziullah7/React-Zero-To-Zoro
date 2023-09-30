import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux/es/exports";


export const Login = () => {
    const [newUsername, setNewUsername] = useState<string>("");
    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>This is the Login Page</h1>
            <h1>{username}</h1>
            <input type="text" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value) } />
            <button onClick={ () => dispatch(login( {username: newUsername} )) }>
                Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
}