import React, { useContext, useState} from "react";
import { UserProvider, UserContext } from './UserContext'

const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext)
  return (
    <div>
      <p>使用 useContext</p>
      <div>user name is : {username}</div>
      <input onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  )
}

const Form = () => <Pannel></Pannel>

// const UserName = () => (
//   <div>
//     <UserProvider>
//       <Form></Form>
//     </UserProvider>
//   </div>
// )

const UserName = () => {
  let [username, handleChangeUsername] = useState('')
  return (
    <div>
      <UserProvider value={{ username, handleChangeUsername }}>
        <Form></Form>
      </UserProvider>
    </div>
  )
}

export default UserName;
