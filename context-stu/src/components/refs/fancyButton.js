import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {

  return (
    <button ref={ref} onClick={() => props.handleClick(new Date())} className="fancy-button">
      {props.children}
    </button>
  )
});

export default FancyButton
