// import React, { createContext, useState } from 'react'
import { createContext } from 'react'

// 使用 createContext 创建上下文
export const UserContext = new createContext()

// 创建 Provider
// export const UserProvider = props => {
//   let [username, handleChangeUsername] = useState('')
//   return (
//     <UserContext.Provider value={{ username, handleChangeUsername }}>
//       {props.children}
//     </UserContext.Provider>
//   )
// }

export const UserProvider = UserContext.Provider

// 创建 Consumer
export const UserConsumer = UserContext.Consumer
