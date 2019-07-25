import React,{ Fragment } from 'react'

import UseClientRect from './useClientRect'
import FetchApiExample from './fetchApiExample'
import Offline from './useOffline'

function CustomHook(){
  return (
    <Fragment>
      <UseClientRect />
      <Offline />
      <FetchApiExample />
    </Fragment>
  )
}

export default CustomHook
