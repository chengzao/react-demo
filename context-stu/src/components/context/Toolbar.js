import React from 'react'

import ThemedButton from './ThemedButton'

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  )
}

export default Toolbar
