import React from "react";
import { UserConsumer, UserProvider } from './UserContext'

const Pannel = () => (
  <UserConsumer>
    {({ username, handleChangeUsername }) => (
      <div>
        <hr/>
        <p>不使用 useContext 需要调用 Consumer 包裹 children</p>
        <div>user name: {username}</div>
        <input onChange={e => handleChangeUsername(e.target.value)} />
      </div>
    )}
  </UserConsumer>
)

const Form = () => <Pannel></Pannel>

const UserName = () => (
  <div>
    <UserProvider>
      <Form></Form>
    </UserProvider>
  </div>
)

export default UserName;
