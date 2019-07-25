import React,{Fragment} from 'react'
import UserConsumer from './UserConsumer'
import UserProvider from './UserProvider'

function User() {
  return (
    <Fragment>
      <UserConsumer />
      <UserProvider />
    </Fragment>
  )
}

export default User
