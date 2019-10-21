import React, { useState } from 'react';
import { backendBaseUrl } from '../config';
import { setLoginUser } from '../modules/LoginUser';
import './Login.css'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChage = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    else { }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };
    (async () => {
      const url = `${backendBaseUrl}/auth/signin`;
      const reqOpt = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      };
      const response = await fetch(url, reqOpt);
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setLoginUser(result.username, result.token);
        props.handleLogin();
        props.history.push('/');
      }
      else {
        alert(result.message);
      }

    })();
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="container">
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" onChange={handleChage} value={username} required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleChage} value={password} required />

          <button type="submit">Login</button>
          <button type="button" onClick={() => { props.history.push('/') }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}