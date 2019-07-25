import React, { useContext} from "react";
import { UserProvider, UserContext } from './UserContext'

const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext)
  return (
    <div>
      <hr/>
      <p>使用 useContext</p>
      <div>user name is : {username}</div>
      <input onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  )
}

const Form = () => <Pannel></Pannel>

const UserName = () => (
  <div>
    <UserProvider>
      <Form></Form>
    </UserProvider>
  </div>
)

export default UserName;
