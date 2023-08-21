import React, {useState} from 'react';
import { Sidebar } from './Sidebar';
import { MainClientContent } from './MainClientContent';
import { findAccount } from './Utils';
import { TransferPage } from './TransferPage';
import { TransactPage } from "./TransactPage";
import { BudgetApp } from './BudgetApp';

export const ClientDashboard = (props) => {
    const { logout, client, setClient } = props;
    const [users, setUsers] = useState(props.users);
    const [notif, setNotif] = useState({message: '', style: ''});
    const [ page, setPage ] = useState('home');

  
    const changePageHandler = (pageName) => {
      setPage(pageName);
      const currentUser = findAccount(client.number);
      setClient(currentUser);

    if(pageName === 'withdraw') {
        setNotif({message: 'Select an account to withdraw money from.', style: 'left'});
    } 

    if(pageName === 'deposit') {
        setNotif({message: 'Select an account to deposit money.', style: 'left'});
    }
    }
  
    if(page === 'home') {
      
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <MainClientContent user={client} />
        </main>
      )
    }
  
    if(page === 'budget') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <BudgetApp client={client} />
        </main>
      )
    }
  
    if(page === 'transfer') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <TransferPage isClient="true" client={client} setClient={setClient} users={users} setUsers={setUsers}  />
        </main>
      )
    }

    if(page === 'deposit') {
      return (
          <main>
              <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
              <TransactPage isClient="true" client={client} setClient={setClient} users={users} setUsers={setUsers} notif={notif} setNotif={setNotif} type="add" page={page} />
          </main>
      )
  }

  if(page === 'withdraw') {
      return (
          <main>
              <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
              <TransactPage isClient="true" client={client} setClient={setClient} users={users} setUsers={setUsers} notif={notif} setNotif={setNotif} type="subtract" page={page} />
          </main>
      )
  }
}
