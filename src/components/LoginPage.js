import React, { useState } from 'react';
import { Logo } from './Logo';
import { Notif } from './Notif';
import { Register } from './Register';
import { CreateAccountPage } from "./CreateAccountPage";
import { Sidebar } from "./Sidebar";
import { Dashboard } from './Dashboard';

export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState('home');
    const [users, setUsers] = useState(props.users);
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      props.loginHandler(username, password);
    }
  
    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }

    const changePageHandler = (pageName) => {
      setPage(pageName);
  }

    if(page === 'create-account') {
      return (
          <main>
            <Sidebar changePage={changePageHandler} page={page} logoutHandler={props.logoutHandler} />
            <CreateAccountPage users={users} setUsers={setUsers} />
          </main>
      )
  }
  
    return (
      <div id="login-page">
        <div id="login">
          <Logo />
          <Notif message={props.notif.message} style={props.notif.style} />
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
            <button type="submit" className="btn">Login</button>
          </form>
          <Register id="register" style={{ listStyle: 'none', textDecoration: 'none' }} />
        </div>
      </div>
    )
}
