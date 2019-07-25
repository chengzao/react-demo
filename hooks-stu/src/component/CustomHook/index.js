import React,{ Fragment } from 'react'

import UseClientRect from './useClientRect'
import FetchApiExample from './fetchApiExample'

function CustomHook(){
  return (
    <Fragment>
      <UseClientRect />
      <FetchApiExample />
    </Fragment>
  )
}

export default CustomHook
