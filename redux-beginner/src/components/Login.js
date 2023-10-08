import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
        <h1>Login Page</h1>
        <button 
          onClick = {
            // passed the "payload" as argument to login function
            () => dispatch(login( {name: "Razi", age: 22, email: "razi@gmail.com"} ))
          }
        > Login</button>

        <button onClick = { () => dispatch(logout()) }>
          Logout</button>
    </div>
  )
}

export default Login;